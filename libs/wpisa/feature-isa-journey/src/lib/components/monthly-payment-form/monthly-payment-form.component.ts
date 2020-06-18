import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MonthlyPayment } from '@wesleyan-frontend/wpisa/data-access';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';
import { InvestmentOptionsFacade } from '../../core/investment-options.facade';

@Component({
  selector: 'wes-monthly-payment-form',
  templateUrl: './monthly-payment-form.component.html',
  styleUrls: ['./monthly-payment-form.component.scss'],
})
export class MonthlyPaymentFormComponent implements OnInit, OnDestroy {
  @Input() submitAttempt = false;

  form: FormGroup = this.builder.group(
    {
      amount: [null, [Validators.required]],
    },
    { updateOn: 'blur' }
  );
  content: MonthlyPayment;

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager,
    private investmentOptionsFacade: InvestmentOptionsFacade
  ) {
    this.investmentOptionsFacade.pageContent$.subscribe((content) => {
      this.content = content.monthlyPayments.monthlyPayment;
      console.log(content);
    });

    this.investmentOptionsFacade.currentTaxPeriodISALimits$.subscribe(
      (limits) => {
        this.form.controls.amount.setValidators([
          Validators.required,
          Validators.min(limits.minNewMonthlyAmount),
          Validators.max(limits.maxMonthlyAmount),
        ]);
      }
    );
  }

  ngOnInit(): void {
    this.formsManager.upsert('monthlyPayment', this.form, {
      withInitialValue: true,
    });
  }

  isFieldInvalid(fieldName: string) {
    return (
      (this.form.get(fieldName).invalid && this.form.get(fieldName).dirty) ||
      (this.form.get(fieldName).invalid && this.submitAttempt)
    );
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('monthlyPayment');
  }
}
