import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  MonthlyPayment,
  ConfigService,
} from '@wesleyan-frontend/wpisa/data-access';
import { InvestmentOptionsFacade } from '../core/investment-options.facade';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';
import { isaRoutesNames } from '../isa-journey.routes.names';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wes-monthly-payments-investment-page',
  templateUrl: './monthly-payments-investment-page.component.html',
  styleUrls: ['./monthly-payments-investment-page.component.scss'],
})
export class MonthlyPaymentsInvestmentPageComponent
  implements OnInit, OnDestroy {
  pageContent: MonthlyPayment;
  submitAttempt = false;
  subscriptions$ = new Subscription();

  constructor(
    private investmentOptionsFacade: InvestmentOptionsFacade,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title
  ) {
    this.subscriptions$.add(
      this.investmentOptionsFacade.pageContent$.subscribe((content) => {
        this.pageContent = content.monthlyPayments.monthlyPayment;
        this.titleService.setTitle(this.pageContent.metaTitle);
      })
    );
  }

  ngOnInit() {}

  onSubmit() {
    this.submitAttempt = true;

    if (
      this.formsManager.isValid('monthlyPayment') &&
      this.formsManager.isValid('directDebit')
    ) {
      this.router.navigate([`/${isaRoutesNames.DECLARATION}`]);
    }
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
