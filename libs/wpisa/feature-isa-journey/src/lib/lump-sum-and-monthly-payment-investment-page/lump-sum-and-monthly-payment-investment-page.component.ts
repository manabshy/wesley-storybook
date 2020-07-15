import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';

import {
  MonthlyAndLumpSumPayment,
  ConfigService,
  DirectDebitDetails,
} from '@wesleyan-frontend/wpisa/data-access';

import { totalAnnualAllowanceValidator } from '@wesleyan-frontend/shared/util-validators';

import { InvestmentOptionsFacade } from '../core/investment-options.facade';
import { isaRoutesNames } from '../isa-journey.routes.names';
import {
  FormBuilder,
  Validators,
  ValidatorFn,
  FormGroup,
  ValidationErrors,
  FormControl,
} from '@angular/forms';
import {
  take,
  tap,
  filter,
  distinctUntilChanged,
  debounceTime,
} from 'rxjs/operators';
import { Subscription, merge } from 'rxjs';
import { AppStateFacade } from '../core/app-state-facade';
import { AppForms } from '../core/app-forms.interface';
import { OnSubmitOrHasValueErrorStateMatcher } from '../core/error-state-matcher';
import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';

@Component({
  selector: 'wes-lump-sum-and-monthly-payment-investment-page',
  templateUrl: './lump-sum-and-monthly-payment-investment-page.component.html',
  styleUrls: ['./lump-sum-and-monthly-payment-investment-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LumpSumAndMonthlyPaymentInvestmentPageComponent
  implements OnInit, OnDestroy {
  pageContent: MonthlyAndLumpSumPayment;
  directDebitContent: DirectDebitDetails;
  submitAttempt = false;
  investmentOptionLink = `/${isaRoutesNames.INVESTMENT_OPTIONS}`;
  subscriptions$ = new Subscription();
  errorStateMatcher = new OnSubmitOrHasValueErrorStateMatcher();

  form = this.fb.group({
    totalAmount: this.fb.group({
      lumpSumAmount: [
        null,
        {
          validators: [Validators.required],
          updateOn: 'blur',
        },
      ],
      monthlyAmount: [
        null,
        {
          validators: [Validators.required],
          updateOn: 'blur',
        },
      ],
    }),
    directDebit: [null, Validators.required],
  });

  lumpSumControl = this.form.get('totalAmount.lumpSumAmount');
  monthlyControl = this.form.get('totalAmount.monthlyAmount');
  totalAmountControl = this.form.get('totalAmount');
  directDebitControl = this.form.get('directDebit');

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

    this.formsManager.upsert('lumpSumAndMonthly', this.form);

    if (this.appStateFacade.state.forms.lumpSumAndMonthly) {
      this.formsManager.patchValue(
        'lumpSumAndMonthly',
        this.appStateFacade.state.forms.lumpSumAndMonthly
      );
    }
  }

  ngOnInit() {
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
      this.totalAmountControl.statusChanges
        .pipe(
          filter((status) => status === 'INVALID'),
          filter((_) => this.hasTotalAnnualAllowanceError()),
          tap((_) => this.setMonthlyFieldInvalid())
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
    }
  }

  isFieldInvalid(fieldName: string) {
    return (
      (this.form.get(fieldName).invalid && this.form.get(fieldName).dirty) ||
      (this.form.get(fieldName).invalid && this.submitAttempt)
    );
  }

  private setMonthlyFieldInvalid(): void {
    return this.monthlyControl.setErrors(this.totalAmountControl.errors, {
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
