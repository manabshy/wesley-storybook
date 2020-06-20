import { Injectable } from '@angular/core';
import { formatCurrency } from '@angular/common';
import { Observable } from 'rxjs';
import { map, filter, shareReplay, tap } from 'rxjs/operators';
import { compose, assocPath, replace, over, lensPath, reduce } from 'ramda';

import {
  ISAApiService,
  ConfigService,
  InvestmentOptions,
} from '@wesleyan-frontend/wpisa/data-access';

import { CustomerDetailsFacade } from './customer-details.facade';

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
    filter((data) => !!data),
    map((tax) => {
      const replacePlaceholders = (data: string) =>
        compose(
          replace('{tax-year}', tax.taxPeriodDescription),
          replace(
            '{total-annual-allowance}',
            formatCurrencyGBP(tax.totalAnnualAllowance)
          ),
          replace(
            '{min-new-monthly-amount}',
            formatCurrencyGBP(tax.minNewMonthlyAmount)
          ),
          replace(
            '{max-monthly-amount}',
            formatCurrencyGBP(tax.maxMonthlyAmount)
          ),
          replace(
            '{min-new-lump-sum-amount}',
            formatCurrencyGBP(tax.minNewLumpSumAmount)
          ),
          replace(
            '{max-lump-sum-amount}',
            formatCurrencyGBP(tax.maxLumpSumAmount)
          )
        )(data);

      const stringPaths = [
        ['summary'],
        ['singleLumpSum', 'summary'],
        ['singleLumpSum', 'lumpSumPayment', 'summary'],
        ['singleLumpSum', 'lumpSumPayment', 'lumpSumHelpText'],
        ['singleLumpSum', 'lumpSumPayment', 'lumpSumAmount', 'inputError'],
        ['monthlyPayments', 'monthlyPayment', 'monthlyHelpText'],
        ['monthlyPayments', 'monthlyPayment', 'monthlyAmount', 'inputError'],
        [
          'monthlyPayments',
          'monthlyPayment',
          'monthlyAmount',
          'inputOtherError',
        ],
        ['monthlyAndLumpSum', 'monthlyAndLumpSumPayment', 'monthlyHelpText'],
        ['monthlyAndLumpSum', 'monthlyAndLumpSumPayment', 'lumpSumHelpText'],
        ['monthlyAndLumpSum', 'monthlyAndLumpSumPayment', 'summary'],
        [
          'monthlyAndLumpSum',
          'monthlyAndLumpSumPayment',
          'lumpSumAmount',
          'inputError',
        ],
        [
          'monthlyAndLumpSum',
          'monthlyAndLumpSumPayment',
          'monthlyAmount',
          'inputError',
        ],
        [
          'monthlyAndLumpSum',
          'monthlyAndLumpSumPayment',
          'monthlyAmount',
          'inputOtherError',
        ],
      ];
      const replacePlaceholdersAtPath = (content) => (path: string[]) =>
        over(lensPath(path), replacePlaceholders, content);

      return reduce(
        (
          placeholdersReplaced: InvestmentOptions,
          pathToBeTransformed: string[]
        ) =>
          replacePlaceholdersAtPath(placeholdersReplaced)(pathToBeTransformed),
        this.pageContent,
        stringPaths
      );
    }),
    tap((v) => console.log('pageContent$', v)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(
    private isaApiService: ISAApiService,
    private configService: ConfigService,
    private customerDetailsFacade: CustomerDetailsFacade
  ) {
    this.pageContent = this.configService.content.investmentOptions;

    assocPath();
  }
}
