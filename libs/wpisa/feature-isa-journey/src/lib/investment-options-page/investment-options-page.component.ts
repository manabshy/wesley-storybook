import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';

import {
  ConfigService,
  InvestmentOptions,
} from '@wesleyan-frontend/wpisa/data-access';

import { InvestmentOptionsFacade } from '../core/investment-options.facade';
import { isaRoutesNames } from '../isa-journey.routes.names';
import { Observable } from 'rxjs';

@Component({
  selector: 'wes-investment-options-page',
  templateUrl: './investment-options-page.component.html',
  styleUrls: ['./investment-options-page.component.scss'],
})
export class InvestmentOptionsPageComponent implements OnInit {
  pageContent: InvestmentOptions;
  pageContent$: Observable<InvestmentOptions> = this.investmentOptionsFacade
    .pageContent$;
  currentTaxPeriodISALimits$ = this.investmentOptionsFacade
    .currentTaxPeriodISALimits$;

  nextPageLink = {
    singleLumpSum: isaRoutesNames.LUMP_SUM_INVESTMENT,
    monthlyPayments: isaRoutesNames.MONTHLY_PAYMENTS_INVESTMENT,
    monthlyAndLumpSum: isaRoutesNames.LUMP_SUM_AND_MONTHLY_PAYMENT_INVESTMENT,
  };

  formValid$ = this.formsManager.validityChanges('investmentOptions');

  constructor(
    private investmentOptionsFacade: InvestmentOptionsFacade,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title
  ) {
    this.pageContent$.subscribe((content) => {
      this.pageContent = content;
      this.titleService.setTitle(content.metaTitle);
    });
    console.log(this.pageContent);

    this.titleService.setTitle(this.pageContent.metaTitle);
  }

  ngOnInit(): void {}

  onSubmit() {
    const selectedInvestmentOption = this.formsManager.getControl(
      'investmentOptions',
      'investmentOption'
    ).value;

    if (this.formsManager.isValid('investmentOptions')) {
      this.router.navigate([`/${this.nextPageLink[selectedInvestmentOption]}`]);
    }
  }
}
