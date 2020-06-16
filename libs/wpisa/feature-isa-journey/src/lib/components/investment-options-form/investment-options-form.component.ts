import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  InvestmentOptions,
  ConfigService,
} from '@wesleyan-frontend/wpisa/data-access';
import { NgFormsManager } from '@ngneat/forms-manager';

@Component({
  selector: 'wes-investment-options-form',
  templateUrl: './investment-options-form.component.html',
  styleUrls: ['./investment-options-form.component.scss'],
})
export class InvestmentOptionsFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  content: InvestmentOptions;

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager,
    private configService: ConfigService
  ) {
    this.content = this.configService.content.investmentOptions;
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      investmentOption: [null, Validators.required],
    });

    this.formsManager.upsert('investmentOptions', this.form, {
      withInitialValue: true,
    });
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('investmentOptions');
  }
}
