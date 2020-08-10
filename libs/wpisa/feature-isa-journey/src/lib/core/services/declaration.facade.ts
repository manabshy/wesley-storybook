import { HttpErrorResponse } from '@angular/common/http';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest, throwError } from 'rxjs';
import {
  map,
  filter,
  tap,
  take,
  startWith,
  catchError,
  concatMap,
  finalize,
  shareReplay,
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
  EndPoints,
} from '@wesleyan-frontend/wpisa/data-access';
import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';

import { CustomerDetailsFacade } from './customer-details.facade';
import { AppForms } from '../models/app-forms.interface';
import { CustomerDetailsFormValue } from '../models/customer-details-form-value.interface';
import { PersonalDetailsViewModel } from '../models/personal-details-view-model.interface';
import { ManualAddressFormValue } from '../../components/manual-address-form/manual-address-form-value.interface';
import { DirectDebitViewModel } from '../models/direct-debit-view-model.interface';
import { DirectDebitFormValue } from '../../components/direct-debit-form/direct-debit-form-value.interface';
import { InvestmentCardViewModel } from '../models/investment-card-view-model.interface';
import { formatCurrencyGBP } from '../util-functions';
import {
  InvestmentOptionPaymentTypeStrings,
  InvestmentOptionPaymentType,
} from '../models/investment-option-form-value.interface';
import { isaRoutesNames } from '../../isa-journey.routes.names';
import { KnowledgeCheckFacade } from './knowledge-check.facade';
import { AppStateFacade } from './app-state-facade';
import { AppState } from '../models/app-state.interface';

@Injectable({
  providedIn: 'root',
})
export class DeclarationFacade {
  private endPoints: EndPoints;
  private pageContent: Declaration;
  private pageContentSubject$ = new BehaviorSubject<Declaration>(null);
  private appState: AppState;
  private paymentUrlSubject$ = new BehaviorSubject<string>(null);

  paymentUrl$ = this.paymentUrlSubject$.asObservable();
  pageContent$ = this.pageContentSubject$.asObservable();
  selectedInvestmentOption$: Observable<InvestmentOptionPaymentTypeStrings>;
  personalDetailsViewModelData$: Observable<PersonalDetailsViewModel>;
  directDebitViewModelData$: Observable<DirectDebitViewModel>;
  investmentCardViewModelData$: Observable<InvestmentCardViewModel>;
  lumpSumAmount$: Observable<number>;
  monthlyAmount$: Observable<number>;

  constructor(
    private isaApiService: ISAApiService,
    private configService: ConfigService,
    private appStateFacade: AppStateFacade,
    private customerDetailsFacade: CustomerDetailsFacade,
    private knowledgeCheckFacade: KnowledgeCheckFacade,
    private formManager: NgFormsManager<AppForms>,
    private loadingService: OverlayProgressSpinnerService
  ) {
    this.pageContent = this.configService.content.declaration;
    this.pageContentSubject$.next(this.pageContent);

    this.endPoints = this.configService.content.endPoints;
    this.appState = this.appStateFacade.state;

    this.personalDetailsViewModelData$ = this.formManager
      .valueChanges('customerPersonalDetails')
      .pipe(
        startWith(this.appState.forms?.customerPersonalDetails),
        map((customerPersonalDetailsFormValue) => {
          return this.mapPersonalDetailsFormValuesToViewModel(
            customerPersonalDetailsFormValue
          );
        })
      );

    this.selectedInvestmentOption$ = this.formManager
      .valueChanges('investmentOptions', 'investmentOption')
      .pipe(
        startWith(this.appState.forms.investmentOptions.investmentOption),
        shareReplay(1)
      );

    this.directDebitViewModelData$ = combineLatest([
      this.formManager
        .valueChanges('monthlyPayment', 'directDebit')
        .pipe(startWith(this.appState.forms?.monthlyPayment?.directDebit)),
      this.formManager
        .valueChanges('lumpSumAndMonthly', 'directDebit')
        .pipe(startWith(this.appState.forms?.lumpSumAndMonthly?.directDebit)),
      this.selectedInvestmentOption$,
    ]).pipe(
      map(([monthlyPaymentDD, lumpSumAndMonthlyDD, investmentOption]) => {
        const dd =
          investmentOption === InvestmentOptionPaymentType.MONTHLY
            ? monthlyPaymentDD
            : lumpSumAndMonthlyDD;

        return investmentOption === InvestmentOptionPaymentType.LUMP_SUM
          ? null
          : this.mapDirectDebitFormValuesToViewModel(dd, investmentOption);
      })
    );

    this.lumpSumAmount$ = combineLatest([
      this.formManager
        .valueChanges('lumpSumPayment', 'amount')
        .pipe(startWith(this.appState.forms?.lumpSumPayment?.amount)),
      this.formManager
        .valueChanges('lumpSumAndMonthly', 'totalAmount.lumpSumAmount')
        .pipe(
          startWith(
            this.appState.forms?.lumpSumAndMonthly?.totalAmount.lumpSumAmount
          )
        ),
      this.selectedInvestmentOption$.pipe(
        startWith(this.appState.forms.investmentOptions.investmentOption)
      ),
    ]).pipe(
      filter(
        ([
          lumpSumPaymentAmount,
          lumpSumAndMonthlyLumpSumAmount,
          investmentOption,
        ]) =>
          investmentOption === InvestmentOptionPaymentType.LUMP_SUM ||
          investmentOption === InvestmentOptionPaymentType.MONTHLY_AND_LUMP_SUM
      ),
      map(
        ([
          lumpSumPaymentAmount,
          lumpSumAndMonthlyLumpSumAmount,
          investmentOption,
        ]) =>
          investmentOption === InvestmentOptionPaymentType.LUMP_SUM
            ? lumpSumPaymentAmount
            : lumpSumAndMonthlyLumpSumAmount
      )
    );

    this.monthlyAmount$ = combineLatest([
      this.formManager
        .valueChanges('monthlyPayment', 'amount')
        .pipe(startWith(this.appState.forms?.monthlyPayment?.amount)),
      this.formManager
        .valueChanges('lumpSumAndMonthly', 'totalAmount.monthlyAmount')
        .pipe(
          startWith(
            this.appState.forms?.lumpSumAndMonthly?.totalAmount.monthlyAmount
          )
        ),
      this.selectedInvestmentOption$.pipe(
        startWith(this.appState.forms.investmentOptions.investmentOption)
      ),
    ]).pipe(
      filter(
        ([
          monthlyPaymentAmount,
          lumpSumAndMonthlyMonthlyAmount,
          investmentOption,
        ]) =>
          investmentOption === InvestmentOptionPaymentType.MONTHLY ||
          investmentOption === InvestmentOptionPaymentType.MONTHLY_AND_LUMP_SUM
      ),
      map(
        ([
          monthlyPaymentAmount,
          lumpSumAndMonthlyMonthlyAmount,
          investmentOption,
        ]) =>
          investmentOption === InvestmentOptionPaymentType.MONTHLY
            ? monthlyPaymentAmount
            : lumpSumAndMonthlyMonthlyAmount
      )
    );

    this.investmentCardViewModelData$ = combineLatest([
      this.lumpSumAmount$.pipe(startWith(0)),
      this.monthlyAmount$.pipe(startWith(0)),
      this.customerDetailsFacade.currentTaxPeriodISALimits$,
      this.selectedInvestmentOption$,
    ]).pipe(
      map(
        ([
          lumpSumAmount,
          monthlyAmount,
          isaLimits,
          selectedInvestmentOption,
        ]) => ({
          showLumpSum:
            selectedInvestmentOption === InvestmentOptionPaymentType.MONTHLY
              ? false
              : true,
          showMonthly:
            selectedInvestmentOption === InvestmentOptionPaymentType.LUMP_SUM
              ? false
              : true,
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
                isaLimits.numberOfMonthlyPayments,
                selectedInvestmentOption
              )
            )}`,
          },
        })
      )
    );
  }

  mapDirectDebitFormValuesToViewModel(
    formValue: DirectDebitFormValue,
    selectedInvestmentOption: InvestmentOptionPaymentTypeStrings
  ): DirectDebitViewModel {
    return {
      showDD:
        selectedInvestmentOption === InvestmentOptionPaymentType.LUMP_SUM
          ? false
          : true,
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
          tap((_) => window.open(this.endPoints.confirmationPage, '_self')),
          catchError((err) => {
            this.handleHttpError(err);

            return throwError(err);
          })
        );
      }),
      catchError((err) => {
        this.handleHttpError(err);

        return throwError(err);
      })
    );
  }

  submitLumpSumISA() {
    this.loadingService.show();

    return this.isaApiService.getTransactionId().pipe(
      map((result) => result.data.transactionId),
      concatMap((transactionId) => {
        const dto = this.getLumpSumTransactionDTO(transactionId);

        return this.isaApiService.getPaymentUrl(dto).pipe(
          tap(() => this.loadingService.reset()),
          tap((data) => {
            this.paymentUrlSubject$.next(data.paymentUrl);
          }),
          catchError((err) => {
            this.handleHttpError(err);

            return throwError(err);
          })
        );
      }),
      catchError((err) => {
        this.handleHttpError(err);

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
        const dto = this.getLumpSumAndMonthlyTransactionDTO(transactionId);

        return this.isaApiService.getPaymentUrl(dto).pipe(
          tap(() => this.loadingService.reset()),
          tap((data) => {
            this.paymentUrlSubject$.next(data.paymentUrl);
          }),
          tap((_) => this.loadingService.hide()),
          catchError((err) => {
            this.handleHttpError(err);

            return throwError(err);
          })
        );
      }),
      catchError((err) => {
        this.handleHttpError(err);

        return throwError(err);
      }),
      finalize(() => this.loadingService.hide())
    );
  }

  private handleHttpError(err: HttpErrorResponse) {
    if (err.status === 400) {
      window.open(this.endPoints.confirmationErrorPage, '_self');
    }
  }

  getMonthlyTransactionDTO(
    transactionId: string
  ): Omit<SubmitTransactionDTO, 'lumpPaymentDetails' | 'lumpAmount'> {
    const onlineDirectDebitDetails = this.mapDirectDebit(
      this.formManager.getControl('monthlyPayment', 'directDebit')?.value ||
        this.appState.forms.monthlyPayment.directDebit
    );
    const regularAmount =
      this.formManager.getControl('monthlyPayment', 'amount')?.value ||
      this.appState.forms.monthlyPayment.amount;

    const dto = {
      ...this.getCommonSubmitTransactionDTO(transactionId),
      paymentType: PaymentType.Regular,
      regularAmount,
      directDebitType: DirectDebitType.ONLINE,
      onlineDirectDebitDetails,
    };

    return dto;
  }

  getLumpSumTransactionDTO(
    transactionId: string
  ): Omit<
    SubmitTransactionDTO,
    'directDebitType' | 'regularAmount' | 'onlineDirectDebitDetails'
  > {
    const lumpAmount =
      this.formManager.getControl('lumpSumPayment', 'amount')?.value ||
      this.appState.forms.lumpSumPayment.amount;

    const dto = {
      ...this.getCommonSubmitTransactionDTO(transactionId),
      paymentType: PaymentType.Lump,
      lumpAmount,
    };

    return dto;
  }

  getLumpSumAndMonthlyTransactionDTO(
    transactionId: string
  ): SubmitTransactionDTO {
    const lumpAmount =
      this.formManager.getControl(
        'lumpSumAndMonthly',
        'totalAmount.lumpSumAmount'
      )?.value ||
      this.appState.forms.lumpSumAndMonthly.totalAmount.lumpSumAmount;

    const regularAmount =
      this.formManager.getControl(
        'lumpSumAndMonthly',
        'totalAmount.monthlyAmount'
      )?.value ||
      this.appState.forms.lumpSumAndMonthly.totalAmount.monthlyAmount;

    const onlineDirectDebitDetails = this.mapDirectDebit(
      this.formManager.getControl('lumpSumAndMonthly', 'directDebit')?.value ||
        this.appState.forms.lumpSumAndMonthly.directDebit
    );

    const dto = {
      ...this.getCommonSubmitTransactionDTO(transactionId),
      paymentType: PaymentType.Both,
      lumpAmount,
      regularAmount,
      directDebitType: DirectDebitType.ONLINE,
      onlineDirectDebitDetails,
    };

    return dto;
  }

  getCommonSubmitTransactionDTO(
    transactionId: string
  ): Pick<
    SubmitTransactionDTO,
    | 'appTestAttemptId'
    | 'transactionId'
    | 'taxPeriodCode'
    | 'customerPermissionGranted'
    | 'currentAddress'
    | 'customerDetails'
    | 'nationalityDetails'
    | 'marketingPreferences'
    | 'declarationsText'
  > {
    const mappedCustomerDTO = this.customerDetailsFacade.mapCustomerFormToSearchCustomerDTO(
      this.formManager.getControl('customerPersonalDetails')?.value ||
        this.appState.forms.customerPersonalDetails
    );

    const dto = {
      currentAddress: mappedCustomerDTO.currentAddress,
      customerDetails: mappedCustomerDTO.customerDetails,
      nationalityDetails: mappedCustomerDTO.nationalityDetails,
      marketingPreferences: mappedCustomerDTO.marketingPreferences,
      transactionId: transactionId,
      appTestAttemptId: this.knowledgeCheckFacade.knowledgeCheckAttemptId,
      taxPeriodCode: '',
      customerPermissionGranted: true,
      declarationsText: (
        this.pageContent.isaRules +
        this.pageContent.adviceContent +
        this.pageContent.authoriseCheckbox.inputLabel +
        this.pageContent.authoriseContent +
        this.pageContent.declarationCheckbox.inputLabel +
        this.pageContent.content +
        this.pageContent.confirmContent
      ).replace(/<[^>]*>/g, ''),
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
      customerConfirmedDD: true,
      accountValidated: false,
    };
  }

  calculateTotalInvestment(
    lumpSumAmount: number = 0,
    monthlyAmount: number,
    numberOfMonthlyPayments: number,
    selectedInvestmentOption: InvestmentOptionPaymentTypeStrings
  ): number {
    switch (selectedInvestmentOption) {
      case InvestmentOptionPaymentType.LUMP_SUM:
        return parseFloat('' + lumpSumAmount);
        break;

      case InvestmentOptionPaymentType.MONTHLY:
        return (
          parseFloat('' + monthlyAmount) *
          parseInt('' + numberOfMonthlyPayments)
        );
        break;

      default:
        return (
          parseFloat('' + lumpSumAmount) +
          parseFloat('' + monthlyAmount) *
            parseInt('' + numberOfMonthlyPayments)
        );
        break;
    }
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
        format(new Date(isaLimits.endDateTime), 'yyyy')
    );
  }
}
