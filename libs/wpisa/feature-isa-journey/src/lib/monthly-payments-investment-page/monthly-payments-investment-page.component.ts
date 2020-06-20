import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  MonthlyPayment,
  ConfigService,
  DirectDebitDetails,
} from '@wesleyan-frontend/wpisa/data-access';
import { InvestmentOptionsFacade } from '../core/investment-options.facade';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';
import { isaRoutesNames } from '../isa-journey.routes.names';
import { Subscription } from 'rxjs';
import { Validators, FormBuilder } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'wes-monthly-payments-investment-page',
  templateUrl: './monthly-payments-investment-page.component.html',
  styleUrls: ['./monthly-payments-investment-page.component.scss'],
})
export class MonthlyPaymentsInvestmentPageComponent
  implements OnInit, OnDestroy {
  pageContent: MonthlyPayment;
  directDebitContent: DirectDebitDetails;
  submitAttempt = false;
  subscriptions$ = new Subscription();
  form = this.fb.group({
    amount: [
      null,
      {
        validators: [Validators.required],
        updateOn: 'blur',
      },
    ],
    directDebit: [null, Validators.required],
  });
  amountControl = this.form.controls.amount;

  constructor(
    private investmentOptionsFacade: InvestmentOptionsFacade,
    private router: Router,
    private formsManager: NgFormsManager,
    private fb: FormBuilder,
    private titleService: Title
  ) {
    this.subscriptions$.add(
      this.investmentOptionsFacade.pageContent$.subscribe((content) => {
        this.pageContent = content.monthlyPayments.monthlyPayment;
        this.directDebitContent = content.directDebitDetails;
        this.titleService.setTitle(this.pageContent.metaTitle);
      })
    );
  }

  ngOnInit(): void {
    this.subscriptions$.add(
      this.investmentOptionsFacade.currentTaxPeriodISALimits$
        .pipe(
          tap((limits) =>
            this.form.controls.amount.setValidators([
              Validators.required,
              Validators.min(limits.minNewMonthlyAmount),
              Validators.max(limits.maxMonthlyAmount),
            ])
          )
        )
        .subscribe()
    );

    this.formsManager.upsert('monthlyPayment', this.form, {
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
    this.subscriptions$.unsubscribe();
    this.formsManager.unsubscribe('monthlyPayment');
  }
}
