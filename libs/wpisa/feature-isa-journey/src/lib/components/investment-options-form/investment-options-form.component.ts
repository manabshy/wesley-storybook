import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  InvestmentOptions,
  ConfigService,
} from '@wesleyan-frontend/wpisa/data-access';
import { NgFormsManager } from '@ngneat/forms-manager';
import { InvestmentOptionsFacade } from '../../core/investment-options.facade';

@Component({
  selector: 'wes-investment-options-form',
  templateUrl: './investment-options-form.component.html',
  styleUrls: ['./investment-options-form.component.scss'],
})
export class InvestmentOptionsFormComponent implements OnInit, OnDestroy {
  @Input() content: InvestmentOptions;
  @Input() isLumpSumAvailable = false;
  @Input() isMonthlyAvailable = false;

  form: FormGroup = this.builder.group({
    investmentOption: [null, Validators.required],
  });

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager,
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
