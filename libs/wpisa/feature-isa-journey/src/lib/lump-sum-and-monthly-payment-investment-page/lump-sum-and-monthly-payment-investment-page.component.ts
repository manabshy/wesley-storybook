import { Component, OnInit } from '@angular/core';
import {
  MonthlyAndLumpSumPayment,
  ConfigService,
} from '@wesleyan-frontend/wpisa/data-access';
import { InvestmentOptionsFacade } from '../core/investment-options.facade';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'wes-lump-sum-and-monthly-payment-investment-page',
  templateUrl: './lump-sum-and-monthly-payment-investment-page.component.html',
  styleUrls: ['./lump-sum-and-monthly-payment-investment-page.component.scss'],
})
export class LumpSumAndMonthlyPaymentInvestmentPageComponent implements OnInit {
  pageContent: MonthlyAndLumpSumPayment;

  formValid$ = this.formsManager.validityChanges('investmentOptions');

  constructor(
    private configService: ConfigService,
    private investmentOptionsFacade: InvestmentOptionsFacade,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title
  ) {
    this.pageContent = this.configService.content.investmentOptions.monthlyAndLumpSum.monthlyAndLumpSumPayment;
    console.log(this.pageContent);

    this.titleService.setTitle(this.pageContent.metaTitle);
  }

  ngOnInit() {}
}
