import {
  Component,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';
import {
  tap,
  filter,
  withLatestFrom,
  pairwise,
  startWith,
  map,
} from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';

import {
  MonthlyAndLumpSumPayment,
  DirectDebitDetails,
} from '@wesleyan-frontend/wpisa/data-access';
import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';
import { totalAnnualAllowanceValidator } from '@wesleyan-frontend/shared/util-validators';

import { DirectDebitFormComponent } from '../components/direct-debit-form/direct-debit-form.component';
import { InvestmentOptionsFacade } from '../core/services/investment-options.facade';
import { OnSubmitOrHasValueErrorStateMatcher } from '../core/error-state-matcher';
import { AppStateFacade } from '../core/services/app-state-facade';
import { AppForms } from '../core/models/app-forms.interface';
import { isaRoutesNames } from '../isa-journey.routes.names';
import { currencyNumeric } from '../core/patterns';

@Component({
  selector: 'wes-lump-sum-and-monthly-payment-investment-page',
  templateUrl: './lump-sum-and-monthly-payment-investment-page.component.html',
  styleUrls: ['./lump-sum-and-monthly-payment-investment-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LumpSumAndMonthlyPaymentInvestmentPageComponent
  implements OnInit, OnDestroy {
  @ViewChild(DirectDebitFormComponent, { static: true })
  ddForm: DirectDebitFormComponent;
  pageContent: MonthlyAndLumpSumPayment;
  directDebitContent: DirectDebitDetails;
  submitAttempt = false;
  showOverallError = false;
  investmentOptionLink = `/${isaRoutesNames.INVESTMENT_OPTIONS}`;
  subscriptions$ = new Subscription();
  errorStateMatcher = new OnSubmitOrHasValueErrorStateMatcher();

  form: FormGroup;
  lumpSumControl: AbstractControl;
  monthlyControl: AbstractControl;
  totalAmountControl: AbstractControl;
  directDebitControl: AbstractControl;

  latestAmountChangeControlName$: Observable<'lumpSumAmount' | 'monthlyAmount'>;

  constructor(
    private loadingService: OverlayProgressSpinnerService,
    private investmentOptionsFacade: InvestmentOptionsFacade,
    private appStateFacade: AppStateFacade,
    private router: Router,
    private formsManager: NgFormsManager<AppForms>,
    private titleService: Title,
    private fb: FormBuilder
  ) {
    this.subscriptions$.add(
      this.investmentOptionsFacade.pageContent$.subscribe((content) => {
        this.pageContent = content.monthlyAndLumpSum.monthlyAndLumpSumPayment;
        this.directDebitContent = content.directDebitDetails;
        this.titleService.setTitle(this.pageContent.metaTitle);
      })
    );
  }

  ngOnInit() {
    this.form = this.fb.group({
      totalAmount: this.fb.group({
        lumpSumAmount: [
          null,
          {
            validators: [
              Validators.required,
              Validators.pattern(currencyNumeric),
            ],
            updateOn: 'blur',
          },
        ],
        monthlyAmount: [
          null,
          {
            validators: [
              Validators.required,
              Validators.pattern(currencyNumeric),
            ],
            updateOn: 'blur',
          },
        ],
      }),
      directDebit: this.ddForm.createGroup(),
    });

    this.lumpSumControl = this.form.get('totalAmount.lumpSumAmount');
    this.monthlyControl = this.form.get('totalAmount.monthlyAmount');
    this.totalAmountControl = this.form.get('totalAmount');
    this.directDebitControl = this.form.get('directDebit');

    this.formsManager.upsert('lumpSumAndMonthly', this.form);

    if (this.appStateFacade.state.forms.lumpSumAndMonthly) {
      this.formsManager.patchValue(
        'lumpSumAndMonthly',
        this.appStateFacade.state.forms.lumpSumAndMonthly
      );
    }

    this.latestAmountChangeControlName$ = this.totalAmountControl.valueChanges.pipe(
      startWith(this.totalAmountControl.value),
      pairwise(),

      map(([prev, curr]) => {
        if (prev.lumpSumAmount !== curr.lumpSumAmount) {
          return 'lumpSumAmount';
        }
        if (prev.monthlyAmount !== curr.monthlyAmount) {
          return 'monthlyAmount';
        }
      })
    );

    this.subscriptions$.add(
      this.investmentOptionsFacade.currentTaxPeriodISALimits$
        .pipe(
          tap((limits) =>
            this.lumpSumControl.setValidators([
              Validators.required,
              Validators.min(limits.minNewLumpSumAmount),
              Validators.max(limits.maxLumpSumAmount),
            ])
          ),
          tap((limits) =>
            this.monthlyControl.setValidators([
              Validators.required,
              Validators.min(limits.minNewMonthlyAmount),
              Validators.max(limits.maxMonthlyAmount),
            ])
          ),
          tap((limits) =>
            this.totalAmountControl.setValidators([
              totalAnnualAllowanceValidator(
                limits.numberOfMonthlyPayments,
                limits.totalAnnualAllowance
              ),
            ])
          )
        )
        .subscribe()
    );

    this.subscriptions$.add(
      this.latestAmountChangeControlName$
        .pipe(
          withLatestFrom(
            this.totalAmountControl.statusChanges.pipe(
              startWith(this.totalAmountControl.status)
            )
          ),
          tap(() => {
            this.monthlyControl.updateValueAndValidity({ emitEvent: false });
            this.lumpSumControl.updateValueAndValidity({ emitEvent: false });
          }),
          filter(
            ([_, totalAmountControlStatus]) =>
              totalAmountControlStatus === 'INVALID' &&
              this.hasTotalAnnualAllowanceError()
          ),
          tap(([latestAmountChangeControlName, _]) =>
            this.setFieldInvalid(latestAmountChangeControlName)
          )
        )
        .subscribe()
    );
  }

  onSubmit() {
    this.submitAttempt = true;
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.loadingService.show();
      //Need the timeout, sometimes the input values don't update
      setTimeout(() => {
        this.subscriptions$.add(
          this.investmentOptionsFacade
            .submitLumpSumAndMonthlyForm()
            .subscribe(() => {
              this.loadingService.hide();
              this.router.navigate([`/${isaRoutesNames.DECLARATION}`]);
            })
        );
      }, 350);
    } else {
      this.showOverallError = true;
    }
  }

  isFieldInvalid(fieldName: string) {
    return (
      (this.form.get(fieldName).invalid && this.form.get(fieldName).dirty) ||
      (this.form.get(fieldName).invalid && this.submitAttempt)
    );
  }

  private setFieldInvalid(
    fieldControlName: 'lumpSumAmount' | 'monthlyAmount'
  ): void {
    this.form
      .get(`totalAmount.${fieldControlName}`)
      .setErrors(this.totalAmountControl.errors, {
        emitEvent: false,
      });
  }

  private hasTotalAnnualAllowanceError(): boolean {
    return (
      this.totalAmountControl.errors &&
      !!this.totalAmountControl.errors.totalAnnualAllowance
    );
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('lumpSumAndMonthly');
    this.subscriptions$.unsubscribe();
  }
}
