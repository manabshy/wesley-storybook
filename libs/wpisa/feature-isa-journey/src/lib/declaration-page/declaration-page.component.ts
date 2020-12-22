import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { tap, filter, switchMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Declaration } from '@wesleyan-frontend/wpisa/data-access';

import { InvestmentOptionPaymentType } from '../core/models/investment-option-form-value.interface';
import { PersonalDetailsViewModel } from '../core/models/personal-details-view-model.interface';
import { DirectDebitViewModel } from '../core/models/direct-debit-view-model.interface';
import { DeclarationFacade } from '../core/services/declaration.facade';
import { isaRoutesNames } from '../isa-journey.routes.names';

@Component({
  selector: 'wes-declaration-page',
  templateUrl: './declaration-page.component.html',
  styleUrls: ['./declaration-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DeclarationPageComponent implements OnDestroy {
  pageContent: Declaration;
  personalDetailsContent$: Observable<PersonalDetailsViewModel> = this
    .declarationFacade.personalDetailsViewModelData$;
  directDebitContent$: Observable<DirectDebitViewModel> = this.declarationFacade
    .directDebitViewModelData$;
  investmentCardViewModelData$ = this.declarationFacade
    .investmentCardViewModelData$;
  selectedInvestmentOption$ = this.declarationFacade.selectedInvestmentOption$;
  investmentOptionsPageLinkMap = {
    [InvestmentOptionPaymentType.LUMP_SUM]: isaRoutesNames.LUMP_SUM_INVESTMENT,
    [InvestmentOptionPaymentType.MONTHLY]:
      isaRoutesNames.MONTHLY_PAYMENTS_INVESTMENT,
    [InvestmentOptionPaymentType.MONTHLY_AND_LUMP_SUM]:
      isaRoutesNames.LUMP_SUM_AND_MONTHLY_PAYMENT_INVESTMENT,
  };
  investmentOptionLink = `/${isaRoutesNames.INVESTMENT_OPTIONS}`;
  yourDetailsLink = `/${isaRoutesNames.YOUR_DETAILS}`;
  yourInvestmentLink = '';
  submitAttempt = false;
  subscriptions$ = new Subscription();

  constructor(
    private declarationFacade: DeclarationFacade,
    private router: Router,
    private titleService: Title
  ) {
    this.subscriptions$.add(
      this.declarationFacade.pageContent$.subscribe((content) => {
        this.pageContent = content;
        this.titleService.setTitle(content.metaTitle);
      })
    );

    this.subscriptions$.add(
      this.selectedInvestmentOption$
        .pipe(
          tap((investmentOption) => {
            this.yourInvestmentLink = `/${this.investmentOptionsPageLinkMap[investmentOption]}`;
          })
        )
        .subscribe()
    );
  }

  onSubmit() {
    this.subscriptions$.add(
      this.selectedInvestmentOption$
        .pipe(
          filter(
            (investmentOption) =>
              investmentOption === InvestmentOptionPaymentType.MONTHLY
          ),
          switchMap(() => this.declarationFacade.submitMonthlyISA())
        )
        .subscribe()
    );

    this.subscriptions$.add(
      this.selectedInvestmentOption$
        .pipe(
          filter(
            (investmentOption) =>
              investmentOption === InvestmentOptionPaymentType.LUMP_SUM
          ),
          switchMap(() =>
            this.declarationFacade
              .submitLumpSumISA()
              .pipe(
                tap((_) => this.router.navigate([`${isaRoutesNames.PAYMENT}`]))
              )
          )
        )
        .subscribe()
    );

    this.subscriptions$.add(
      this.selectedInvestmentOption$
        .pipe(
          filter(
            (investmentOption) =>
              investmentOption ===
              InvestmentOptionPaymentType.MONTHLY_AND_LUMP_SUM
          ),
          switchMap(() =>
            this.declarationFacade
              .submitLumpSumAndMonthlyISA()
              .pipe(
                tap((_) => this.router.navigate([`${isaRoutesNames.PAYMENT}`]))
              )
          )
        )
        .subscribe()
    );
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
