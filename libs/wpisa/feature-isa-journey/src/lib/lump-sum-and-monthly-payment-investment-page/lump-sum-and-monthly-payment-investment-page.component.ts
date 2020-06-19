import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';

import {
  MonthlyAndLumpSumPayment,
  ConfigService,
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
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wes-lump-sum-and-monthly-payment-investment-page',
  templateUrl: './lump-sum-and-monthly-payment-investment-page.component.html',
  styleUrls: ['./lump-sum-and-monthly-payment-investment-page.component.scss'],
})
export class LumpSumAndMonthlyPaymentInvestmentPageComponent
  implements OnInit, OnDestroy {
  pageContent: MonthlyAndLumpSumPayment;
  submitAttempt = false;
  subscriptions$ = new Subscription();

  form = this.builder.group({
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
    directDebit: [null, Validators.required],
  });

  constructor(
    private investmentOptionsFacade: InvestmentOptionsFacade,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title,
    private builder: FormBuilder
  ) {
    this.subscriptions$.add(
      this.investmentOptionsFacade.pageContent$.subscribe((content) => {
        this.pageContent = content.monthlyAndLumpSum.monthlyAndLumpSumPayment;
        this.titleService.setTitle(this.pageContent.metaTitle);
      })
    );
  }

  ngOnInit() {
    this.subscriptions$.add(
      this.investmentOptionsFacade.currentTaxPeriodISALimits$.subscribe(
        (limits) => {
          console.log(limits);
          this.form.controls.monthlyAmount.setValidators([
            Validators.required,
            Validators.min(limits.minNewMonthlyAmount),
            Validators.max(limits.maxMonthlyAmount),
            totalAnnualAllowanceValidator(
              this.form.controls.lumpSumAmount,
              limits.numberOfMonthlyPayments,
              limits.totalAnnualAllowance
            ),
          ]);

          this.form.controls.lumpSumAmount.setValidators([
            Validators.required,
            Validators.min(limits.minNewLumpSumAmount),
            Validators.max(limits.maxLumpSumAmount),
          ]);
        }
      )
    );

    this.formsManager.upsert('lumpSumAndMonthly', this.form, {
      withInitialValue: true,
    });
  }

  onSubmit() {
    this.submitAttempt = true;

    if (this.form.valid) {
      this.router.navigate([`/${isaRoutesNames.DECLARATION}`]);
    }
  }

  isFieldInvalid(fieldName: string) {
    return (
      (this.form.get(fieldName).invalid && this.form.get(fieldName).dirty) ||
      (this.form.get(fieldName).invalid && this.submitAttempt)
    );
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('lumpSumAndMonthly');
    this.subscriptions$.unsubscribe();
  }
}
