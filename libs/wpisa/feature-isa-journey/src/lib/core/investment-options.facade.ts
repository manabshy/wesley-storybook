import { Injectable } from '@angular/core';

import {
  ISAApiService,
  ConfigService,
  InvestmentOptions,
} from '@wesleyan-frontend/wpisa/data-access';
import { CustomerDetailsFacade } from './customer-details.facade';
import { map } from 'rxjs/operators';
import { formatCurrency } from '@angular/common';
import { Observable } from 'rxjs';

function formatCurrencyGBP(value: number) {
  return formatCurrency(value, 'en-gb', '£', 'GBP', '1.0-2');
}
@Injectable({
  providedIn: 'root',
})
export class InvestmentOptionsFacade {
  private pageContent: InvestmentOptions;
  currentTaxPeriodISALimits$ = this.customerDetailsFacade
    .currentTaxPeriodISALimits$;

  pageContent$: Observable<
    InvestmentOptions
  > = this.currentTaxPeriodISALimits$.pipe(
    map((tax) => {
      return {
        ...this.pageContent,
        summary: this.pageContent.summary
          .replace('{tax-year}', tax.taxPeriodDescription)
          .replace(
            '{total-annual-allowance}',
            formatCurrencyGBP(tax.totalAnnualAllowance)
          ),
        singleLumpSum: {
          ...this.pageContent.singleLumpSum,
          summary: this.pageContent.singleLumpSum.summary.replace(
            '{max-lump-sum-amount}',
            formatCurrencyGBP(tax.maxLumpSumAmount)
          ),
          lumpSumPayment: {
            ...this.pageContent.singleLumpSum.lumpSumPayment,
            summary: this.pageContent.singleLumpSum.lumpSumPayment.summary
              .replace(
                '{min-new-lump-sum-amount}',
                formatCurrencyGBP(tax.minNewLumpSumAmount)
              )
              .replace(
                '{max-lump-sum-amount}',
                formatCurrencyGBP(tax.maxLumpSumAmount)
              ),
            lumpSumHelpText: this.pageContent.singleLumpSum.lumpSumPayment.lumpSumHelpText.replace(
              '{min-new-lump-sum-amount}',
              formatCurrencyGBP(tax.minNewLumpSumAmount)
            ),
          },
        },
        monthlyPayments: {
          ...this.pageContent.monthlyPayments,
          monthlyPayment: {
            ...this.pageContent.monthlyPayments.monthlyPayment,
            monthlyHelpText: this.pageContent.monthlyPayments.monthlyPayment.monthlyHelpText.replace(
              '{min-new-monthly-amount}',
              formatCurrencyGBP(tax.minNewMonthlyAmount)
            ),
          },
        },
        monthlyAndLumpSum: {
          ...this.pageContent.monthlyAndLumpSum,
          monthlyAndLumpSumPayment: {
            ...this.pageContent.monthlyAndLumpSum.monthlyAndLumpSumPayment,
            monthlyHelpText: this.pageContent.monthlyAndLumpSum.monthlyAndLumpSumPayment.monthlyHelpText.replace(
              '{min-new-monthly-amount}',
              formatCurrencyGBP(tax.minNewMonthlyAmount)
            ),
            lumpSumHelpText: this.pageContent.monthlyAndLumpSum.monthlyAndLumpSumPayment.lumpSumHelpText.replace(
              '{min-new-lump-sum-amount}',
              formatCurrencyGBP(tax.minNewLumpSumAmount)
            ),
          },
        },
      };
    })
  );

  constructor(
    private isaApiService: ISAApiService,
    private configService: ConfigService,
    private customerDetailsFacade: CustomerDetailsFacade
  ) {
    this.pageContent = this.configService.content.investmentOptions;
  }
}
