import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';

import {
  ConfigService,
  InvestmentOptions,
  CurrentTaxPeriodISALimits,
} from '@wesleyan-frontend/wpisa/data-access';

import { InvestmentOptionsFacade } from '../core/investment-options.facade';
import { isaRoutesNames } from '../isa-journey.routes.names';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'wes-investment-options-page',
  templateUrl: './investment-options-page.component.html',
  styleUrls: ['./investment-options-page.component.scss'],
})
export class InvestmentOptionsPageComponent implements OnInit, OnDestroy {
  pageContent: InvestmentOptions;
  limits: CurrentTaxPeriodISALimits;
  nextPageLink = {
    singleLumpSum: isaRoutesNames.LUMP_SUM_INVESTMENT,
    monthlyPayments: isaRoutesNames.MONTHLY_PAYMENTS_INVESTMENT,
    monthlyAndLumpSum: isaRoutesNames.LUMP_SUM_AND_MONTHLY_PAYMENT_INVESTMENT,
  };

  pageContent$: Observable<InvestmentOptions> = this.investmentOptionsFacade
    .pageContent$;
  currentTaxPeriodISALimits$ = this.investmentOptionsFacade
    .currentTaxPeriodISALimits$;
  subscriptions$ = new Subscription();
  formValid$ = this.formsManager.validityChanges('investmentOptions');

  constructor(
    private investmentOptionsFacade: InvestmentOptionsFacade,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title
  ) {
    this.subscriptions$.add(
      this.pageContent$.subscribe((content) => {
        this.pageContent = content;
        this.titleService.setTitle(content.metaTitle);
      })
    );

    this.subscriptions$.add(
      this.currentTaxPeriodISALimits$.subscribe((limits) => {
        this.limits = limits;
      })
    );
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
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
