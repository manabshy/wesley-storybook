import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  InvestmentOptions,
  ConfigService,
} from '@wesleyan-frontend/wpisa/data-access';
import { NgFormsManager } from '@ngneat/forms-manager';
import { InvestmentOptionsFacade } from '../../core/investment-options.facade';
import { InvestmentOptionPaymentType } from '../../core/investment-option-form-value.interface';
import { AppForms } from '../../core/app-forms.interface';

@Component({
  selector: 'wes-investment-options-form',
  templateUrl: './investment-options-form.component.html',
  styleUrls: ['./investment-options-form.component.scss'],
})
export class InvestmentOptionsFormComponent implements OnInit, OnDestroy {
  @Input() content: InvestmentOptions;
  @Input() isLumpSumAvailable = false;
  @Input() isMonthlyAvailable = false;

  lumpSumValue = InvestmentOptionPaymentType.LUMP_SUM;
  monthlyValue = InvestmentOptionPaymentType.MONTHLY;
  monthlyAndLumpSumValue = InvestmentOptionPaymentType.MONTHLY_AND_LUMP_SUM;

  form: FormGroup = this.builder.group({
    investmentOption: [null, Validators.required],
  });

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager<AppForms>,
    private investmentOptionsFacade: InvestmentOptionsFacade
  ) {}

  ngOnInit(): void {
    this.formsManager.upsert('investmentOptions', this.form, {
      withInitialValue: true,
    });
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('investmentOptions');
  }
}
