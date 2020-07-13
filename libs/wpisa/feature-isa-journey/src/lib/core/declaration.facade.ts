import { Injectable, OnInit } from '@angular/core';
import { NgFormsManager } from '@ngneat/forms-manager';
import {
  Observable,
  of,
  BehaviorSubject,
  combineLatest,
  throwError,
} from 'rxjs';
import {
  map,
  filter,
  tap,
  take,
  startWith,
  catchError,
  concatMap,
  finalize,
} from 'rxjs/operators';
import { format } from 'date-fns';

import {
  ISAApiService,
  ConfigService,
  Declaration,
  CurrentTaxPeriodISALimits,
  SubmitTransactionDTO,
  PaymentType,
  DirectDebitType,
  OnlineDirectDebitDetails,
} from '@wesleyan-frontend/wpisa/data-access';
import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';

import { CustomerDetailsFacade } from './customer-details.facade';
import { AppForms } from './app-forms.interface';
import { CustomerDetailsFormValue } from './customer-details-form-value.interface';
import { PersonalDetailsViewModel } from './personal-details-view-model.interface';
import { ManualAddressFormValue } from '../components/manual-address-form/manual-address-form-value.interface';
import { DirectDebitViewModel } from './direct-debit-view-model.interface';
import { DirectDebitFormValue } from '../components/direct-debit-form/direct-debit-form-value.interface';
import { InvestmentCardViewModel } from './investment-card-view-model.interface';
import { formatCurrencyGBP } from './util-functions';
import {
  InvestmentOptionPaymentTypeStrings,
  InvestmentOptionPaymentType,
} from './investment-option-form-value.interface';
import { isaRoutesNames } from '../isa-journey.routes.names';
import { KnowledgeCheckFacade } from './knowledge-check.facade';

@Injectable({
  providedIn: 'root',
})
export class DeclarationFacade {
  private pageContent: Declaration;
  private pageContentSubject$ = new BehaviorSubject<Declaration>(null);
  private personalDetailsViewModelDataSubject$ = new BehaviorSubject<
    PersonalDetailsViewModel
  >(null);
  private customerPersonalDetailsFormValue: CustomerDetailsFormValue;
  private paymentUrlSubject$ = new BehaviorSubject<string>(null);

  paymentUrl$ = this.paymentUrlSubject$.asObservable();
  pageContent$ = this.pageContentSubject$.asObservable();
  personalDetailsViewModelData$ = this.personalDetailsViewModelDataSubject$.asObservable();
  selectedInvestmentOption$: Observable<InvestmentOptionPaymentTypeStrings>;
  directDebitViewModelData$: Observable<DirectDebitViewModel>;
  investmentCardViewModelData$: Observable<InvestmentCardViewModel>;
  lumpSumAmount$: Observable<number>;
  monthlyAmount$: Observable<number>;

  constructor(
    private isaApiService: ISAApiService,
    private configService: ConfigService,
    private customerDetailsFacade: CustomerDetailsFacade,
    private knowledgeCheckFacade: KnowledgeCheckFacade,
    private formManager: NgFormsManager<AppForms>,
    private loadingService: OverlayProgressSpinnerService
  ) {
    this.pageContent = this.configService.content.declaration;
    this.pageContentSubject$.next(this.pageContent);

    this.customerPersonalDetailsFormValue = this.formManager.getControl(
      'customerPersonalDetails'
    ).value;

    this.personalDetailsViewModelDataSubject$.next(
      this.mapPersonalDetailsFormValuesToViewModel(
        this.customerPersonalDetailsFormValue
      )
    );

    this.selectedInvestmentOption$ = this.formManager.valueChanges(
      'investmentOptions',
      'investmentOption'
    );

    this.directDebitViewModelData$ = this.selectedInvestmentOption$.pipe(
      filter(
        (investmentOption) =>
          investmentOption === InvestmentOptionPaymentType.MONTHLY ||
          investmentOption === InvestmentOptionPaymentType.MONTHLY_AND_LUMP_SUM
      ),
      map((investmentOption) =>
        investmentOption === InvestmentOptionPaymentType.MONTHLY
          ? this.formManager.getControl('monthlyPayment', 'directDebit').value
          : this.formManager.getControl('lumpSumAndMonthly', 'directDebit')
              .value
      ),
      map(this.mapDirectDebitFormValuesToViewModel)
    );

    this.lumpSumAmount$ = this.selectedInvestmentOption$.pipe(
      filter(
        (investmentOption) =>
          investmentOption === InvestmentOptionPaymentType.LUMP_SUM ||
          investmentOption === InvestmentOptionPaymentType.MONTHLY_AND_LUMP_SUM
      ),
      map((investmentOption) =>
        investmentOption === InvestmentOptionPaymentType.LUMP_SUM
          ? this.formManager.getControl('lumpSumPayment', 'amount').value
          : this.formManager.getControl('lumpSumAndMonthly', 'totalAmount')
              .controls.lumpSumAmount.value
      )
    );

    this.monthlyAmount$ = this.selectedInvestmentOption$.pipe(
      filter(
        (investmentOption) =>
          investmentOption === InvestmentOptionPaymentType.MONTHLY ||
          investmentOption === InvestmentOptionPaymentType.MONTHLY_AND_LUMP_SUM
      ),
      map((investmentOption) =>
        investmentOption === InvestmentOptionPaymentType.MONTHLY
          ? this.formManager.getControl('monthlyPayment', 'amount').value
          : this.formManager.getControl('lumpSumAndMonthly', 'totalAmount')
              .controls.monthlyAmount.value
      )
    );

    this.investmentCardViewModelData$ = combineLatest([
      this.lumpSumAmount$.pipe(startWith(0)),
      this.monthlyAmount$.pipe(startWith(0)),
      this.customerDetailsFacade.currentTaxPeriodISALimits$,
    ]).pipe(
      map(([lumpSumAmount, monthlyAmount, isaLimits]) => ({
        showLumpSum: lumpSumAmount ? true : false,
        showMonthly: monthlyAmount ? true : false,
        lumpSumPayment: {
          label: 'Lump-sum amount',
          value: `${formatCurrencyGBP(lumpSumAmount)}`,
        },
        monthlyPayment: {
          label: 'Monthly payments',
          value: `${formatCurrencyGBP(monthlyAmount)}`,
        },
        total: {
          label: this.formatTaxYear(
            this.pageContent.totalInvestmentText,
            isaLimits
          ),
          value: `${formatCurrencyGBP(
            this.calculateTotalInvestment(
              lumpSumAmount,
              monthlyAmount,
              isaLimits.numberOfMonthlyPayments
            )
          )}`,
        },
      }))
    );
  }

  mapDirectDebitFormValuesToViewModel(
    formValue: DirectDebitFormValue
  ): DirectDebitViewModel {
    return {
      accountNumber: {
        label: 'Account number',
        value: formValue.accountNumber,
      },
      sortCode: {
        label: 'Sort code',
        value: `${formValue.sortCode.c1}-${formValue.sortCode.c2}-${formValue.sortCode.c3}`,
      },
    };
  }

  mapPersonalDetailsFormValuesToViewModel(
    formValue: CustomerDetailsFormValue
  ): PersonalDetailsViewModel {
    const {
      title: titleId,
      firstName,
      lastName,
      dob,
      nationality: nationalityId,
      personalEmail,
      profession: professionId,
      personalMobileNumber,
      manualAddress,
    } = formValue;

    const data = {
      name: {
        label: 'Name',
        value: `${titleId} ${firstName} ${lastName}`,
      },
      dob: {
        label: 'Date of birth',
        value: format(
          new Date(
            parseInt(dob.year),
            parseInt(dob.month) - 1, // starts with 0 - January
            parseInt(dob.day)
          ),

          'dd/MM/yyyy'
        ),
      },
      profession: { label: 'Profession', value: professionId },
      nationality: { label: 'Nationality', value: nationalityId },
      emailAddress: { label: 'Email address', value: personalEmail },
      phoneNumber: {
        label: 'Phone number',
        value: personalMobileNumber.replace(/[^0-9]/g, ''),
      },
      homeAddress: {
        label: 'Home address',
        value: this.transformAddress(manualAddress),
      },
    };

    this.customerDetailsFacade
      .getTitleById$(titleId)
      .pipe(
        tap((title) => (data.name.value = `${title} ${firstName} ${lastName}`)),
        take(1)
      )
      .subscribe();

    this.customerDetailsFacade
      .getProfessionById$(professionId)
      .pipe(
        tap((profession) => (data.profession.value = profession)),
        take(1)
      )
      .subscribe();

    this.customerDetailsFacade
      .getNationalityById$(nationalityId)
      .pipe(
        tap((nationality) => (data.nationality.value = nationality)),
        take(1)
      )
      .subscribe();

    return data;
  }

  submitMonthlyISA() {
    this.loadingService.show();

    return this.isaApiService.getTransactionId().pipe(
      map((result) => result.data.transactionId),
      concatMap((transactionId) => {
        const dto = this.getMonthlyTransactionDTO(transactionId);

        return this.isaApiService.submitTransaction(dto).pipe(
          tap((_) => this.loadingService.hide()),
          catchError((err) => {
            window.open(`${isaRoutesNames.KNOWLEDGE_CHECK_ERROR}`, '_self');
            return throwError(err);
          })
        );
      }),
      catchError((err) => {
        window.open(`/${isaRoutesNames.KNOWLEDGE_CHECK_ERROR}`, '_self');
        return throwError(err);
      })
    );
  }

  submitLumpSumISA() {
    this.loadingService.show();

    return this.isaApiService.getTransactionId().pipe(
      map((result) => result.data.transactionId),
      concatMap((transactionId) => {
        const dto = this.getLumpSumTransactionDTO(
          transactionId + Math.random().toString(36).substring(2) //TODO REMOVE RANDOM
        );

        return this.isaApiService.getPaymentUrl(dto).pipe(
          tap(() => this.loadingService.reset()),
          tap((data) => {
            this.paymentUrlSubject$.next(data.paymentUrl);
          }),
          catchError((err) => {
            window.open(`${isaRoutesNames.KNOWLEDGE_CHECK_ERROR}`, '_self');
            return throwError(err);
          })
        );
      }),
      catchError((err) => {
        window.open(`/${isaRoutesNames.KNOWLEDGE_CHECK_ERROR}`, '_self');
        return throwError(err);
      }),
      finalize(() => this.loadingService.hide())
    );
  }

  submitLumpSumAndMonthlyISA() {
    this.loadingService.show();

    return this.isaApiService.getTransactionId().pipe(
      map((result) => result.data.transactionId),
      concatMap((transactionId) => {
        const dto = this.getLumpSumAndMonthlyTransactionDTO(
          transactionId + Math.random().toString(36).substring(2) //TODO REMOVE RANDOM
        );

        return this.isaApiService.getPaymentUrl(dto).pipe(
          tap(() => this.loadingService.reset()),
          tap((data) => {
            this.paymentUrlSubject$.next(data.paymentUrl);
          }),
          tap((_) => this.loadingService.hide()),
          catchError((err) => {
            window.open(`${isaRoutesNames.KNOWLEDGE_CHECK_ERROR}`, '_self');
            return throwError(err);
          })
        );
      }),
      catchError((err) => {
        console.log('isa both', err);
        window.open(`/${isaRoutesNames.KNOWLEDGE_CHECK_ERROR}`, '_self');
        return throwError(err);
      }),
      finalize(() => this.loadingService.hide())
    );
  }

  getMonthlyTransactionDTO(
    transactionId: string
  ): Omit<SubmitTransactionDTO, 'lumpPaymentDetails' | 'lumpAmount'> {
    const mappedCustomerDTO = this.customerDetailsFacade.mapCustomerFormToSearchCustomerDTO(
      this.formManager.getControl('customerPersonalDetails').value
    );

    const dto = {
      currentAddress: mappedCustomerDTO.currentAddress,
      customerDetails: mappedCustomerDTO.customerDetails,
      nationalityDetails: mappedCustomerDTO.nationalityDetails,
      marketingPreferences: mappedCustomerDTO.marketingPreferences,
      transactionId: transactionId,
      appTestAttemptId: this.knowledgeCheckFacade.knowledgeCheckAttemptId,
      taxPeriodCode: '',
      paymentType: PaymentType.Regular,
      regularAmount: this.formManager.getControl('monthlyPayment', 'amount')
        .value,
      directDebitType: DirectDebitType.ONLINE,
      onlineDirectDebitDetails: this.mapDirectDebit(
        this.formManager.getControl('monthlyPayment', 'directDebit').value
      ),
      customerPermissionGranted: true,
    };

    this.customerDetailsFacade.currentTaxPeriodISALimits$
      .pipe(
        tap((value) => (dto.taxPeriodCode = value.taxPeriodCode)),
        take(1)
      )
      .subscribe();
    return dto;
  }

  getLumpSumTransactionDTO(
    transactionId: string
  ): Omit<
    SubmitTransactionDTO,
    'directDebitType' | 'regularAmount' | 'onlineDirectDebitDetails'
  > {
    const mappedCustomerDTO = this.customerDetailsFacade.mapCustomerFormToSearchCustomerDTO(
      this.formManager.getControl('customerPersonalDetails').value
    );

    const dto = {
      currentAddress: mappedCustomerDTO.currentAddress,
      customerDetails: mappedCustomerDTO.customerDetails,
      nationalityDetails: mappedCustomerDTO.nationalityDetails,
      marketingPreferences: mappedCustomerDTO.marketingPreferences,
      transactionId: transactionId,
      appTestAttemptId: this.knowledgeCheckFacade.knowledgeCheckAttemptId,
      taxPeriodCode: '',
      paymentType: PaymentType.LumpSum,
      lumpAmount: this.formManager.getControl('lumpSumPayment', 'amount').value,
      customerPermissionGranted: true,
    };

    this.customerDetailsFacade.currentTaxPeriodISALimits$
      .pipe(
        tap((value) => (dto.taxPeriodCode = value.taxPeriodCode)),
        take(1)
      )
      .subscribe();
    return dto;
  }

  getLumpSumAndMonthlyTransactionDTO(
    transactionId: string
  ): SubmitTransactionDTO {
    const mappedCustomerDTO = this.customerDetailsFacade.mapCustomerFormToSearchCustomerDTO(
      this.formManager.getControl('customerPersonalDetails').value
    );

    const dto = {
      currentAddress: mappedCustomerDTO.currentAddress,
      customerDetails: mappedCustomerDTO.customerDetails,
      nationalityDetails: mappedCustomerDTO.nationalityDetails,
      marketingPreferences: mappedCustomerDTO.marketingPreferences,
      transactionId: transactionId,
      appTestAttemptId: this.knowledgeCheckFacade.knowledgeCheckAttemptId,
      taxPeriodCode: '',
      paymentType: PaymentType.Both,
      lumpAmount: this.formManager.getControl(
        'lumpSumAndMonthly',
        'totalAmount.lumpSumAmount'
      ).value,
      regularAmount: this.formManager.getControl(
        'lumpSumAndMonthly',
        'totalAmount.monthlyAmount'
      ).value,
      directDebitType: DirectDebitType.ONLINE,
      onlineDirectDebitDetails: this.mapDirectDebit(
        this.formManager.getControl('lumpSumAndMonthly', 'directDebit').value
      ),
      customerPermissionGranted: true,
    };

    this.customerDetailsFacade.currentTaxPeriodISALimits$
      .pipe(
        tap((value) => (dto.taxPeriodCode = value.taxPeriodCode)),
        take(1)
      )
      .subscribe();
    return dto;
  }

  mapDirectDebit(value: DirectDebitFormValue): OnlineDirectDebitDetails {
    return {
      accountHolderFullName: value.accountHolderFullName,
      sortCode: `${value.sortCode.c1}-${value.sortCode.c2}-${value.sortCode.c3}`,
      accountNumber: value.accountNumber,
      bankName: value.bankName,
      customerConfimedDD: true,
      accountValidated: false,
    };
  }

  calculateTotalInvestment(
    lumpSumAmount: number = 0,
    monthlyAmount: number,
    numberOfMonthlyPayments: number
  ): number {
    return (
      parseFloat('' + lumpSumAmount) +
      parseFloat('' + monthlyAmount) * parseInt('' + numberOfMonthlyPayments)
    );
  }

  transformAddress(address: ManualAddressFormValue, delimiter = ', '): string {
    if (!address) {
      return '';
    }

    const fields: { fieldName: string; delimited: boolean }[] = [
      { fieldName: 'flatNumber', delimited: false },
      { fieldName: 'houseNumber', delimited: false },
      { fieldName: 'houseName', delimited: true },
      { fieldName: 'street', delimited: true },
      { fieldName: 'town', delimited: true },
      { fieldName: 'region', delimited: true },
      { fieldName: 'county', delimited: true },
      { fieldName: 'postcode', delimited: true },
    ];

    let result = fields.reduce((accumulator, field) => {
      const value = address[field.fieldName];

      return value
        ? `${accumulator}${value}${field.delimited ? delimiter : ' '}`
        : accumulator;
    }, '');

    result = result.substr(0, result.length - delimiter.length);

    return result;
  }

  formatTaxYear(text: string, isaLimits: CurrentTaxPeriodISALimits): string {
    return text.replace(
      '{tax-year}',
      format(new Date(isaLimits.startDateTime), 'yyyy') +
        '/' +
        format(new Date(isaLimits.endDateTime), 'yy')
    );
  }
}
