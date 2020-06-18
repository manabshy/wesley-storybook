import { Component, OnInit } from '@angular/core';
import {
  MonthlyAndLumpSumPayment,
  ConfigService,
} from '@wesleyan-frontend/wpisa/data-access';
import { InvestmentOptionsFacade } from '../core/investment-options.facade';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';
import { isaRoutesNames } from '../isa-journey.routes.names';

@Component({
  selector: 'wes-lump-sum-and-monthly-payment-investment-page',
  templateUrl: './lump-sum-and-monthly-payment-investment-page.component.html',
  styleUrls: ['./lump-sum-and-monthly-payment-investment-page.component.scss'],
})
export class LumpSumAndMonthlyPaymentInvestmentPageComponent implements OnInit {
  pageContent: MonthlyAndLumpSumPayment;
  submitAttempt = false;

  constructor(
    private investmentOptionsFacade: InvestmentOptionsFacade,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title
  ) {
    this.investmentOptionsFacade.pageContent$.subscribe((content) => {
      this.pageContent = content.monthlyAndLumpSum.monthlyAndLumpSumPayment;
      this.titleService.setTitle(this.pageContent.metaTitle);
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.submitAttempt = true;

    if (
      this.formsManager.isValid('monthlyPayment') &&
      this.formsManager.isValid('directDebit') &&
      this.formsManager.isValid('lumpSumPayment')
    ) {
      this.router.navigate([`/${isaRoutesNames.DECLARATION}`]);
    }
  }
}
