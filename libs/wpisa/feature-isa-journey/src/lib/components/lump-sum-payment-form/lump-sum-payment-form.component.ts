import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';
import { take } from 'rxjs/operators';

import { LumpSumPayment } from '@wesleyan-frontend/wpisa/data-access';

import { InvestmentOptionsFacade } from '../../core/investment-options.facade';

@Component({
  selector: 'wes-lump-sum-payment-form',
  templateUrl: './lump-sum-payment-form.component.html',
  styleUrls: ['./lump-sum-payment-form.component.scss'],
})
export class LumpSumPaymentFormComponent implements OnInit, OnDestroy {
  @Input() submitAttempt = false;

  form: FormGroup = this.builder.group(
    {
      amount: [null, [Validators.required]],
    },
    { updateOn: 'blur' }
  );
  content: LumpSumPayment;

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager,
    private investmentOptionsFacade: InvestmentOptionsFacade
  ) {
    this.investmentOptionsFacade.pageContent$
      .pipe(take(1))
      .subscribe((content) => {
        this.content = content.singleLumpSum.lumpSumPayment;
        console.log(content);
      });

    this.investmentOptionsFacade.currentTaxPeriodISALimits$
      .pipe(take(1))
      .subscribe((limits) => {
        this.form.controls.amount.setValidators([
          Validators.required,
          Validators.min(limits.minNewLumpSumAmount),
          Validators.max(limits.maxLumpSumAmount),
        ]);
      });
  }

  ngOnInit(): void {
    this.formsManager.upsert('lumpSumPayment', this.form, {
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
    this.formsManager.unsubscribe('lumpSumPayment');
  }
}
