import { Injectable } from '@angular/core';
import { formatCurrency } from '@angular/common';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { compose, assocPath, replace, over, lensPath } from 'ramda';

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
      const placeholdersReplaced = compose(
        over(
          lensPath(['summary']),
          compose(
            replace('{tax-year}', tax.taxPeriodDescription),
            replace(
              '{total-annual-allowance}',
              formatCurrencyGBP(tax.totalAnnualAllowance)
            )
          )
        ),
        over(
          lensPath(['singleLumpSum', 'summary']),
          replace(
            '{max-lump-sum-amount}',
            formatCurrencyGBP(tax.maxLumpSumAmount)
          )
        ),
        over(
          lensPath(['singleLumpSum', 'lumpSumPayment', 'summary']),
          compose(
            replace(
              '{min-new-lump-sum-amount}',
              formatCurrencyGBP(tax.minNewLumpSumAmount)
            ),
            replace(
              '{max-lump-sum-amount}',
              formatCurrencyGBP(tax.maxLumpSumAmount)
            )
          )
        ),
        over(
          lensPath(['singleLumpSum', 'lumpSumPayment', 'lumpSumHelpText']),
          compose(
            replace(
              '{min-new-lump-sum-amount}',
              formatCurrencyGBP(tax.minNewLumpSumAmount)
            )
          )
        ),
        over(
          lensPath([
            'singleLumpSum',
            'lumpSumPayment',
            'lumpSumAmount',
            'inputError',
          ]),
          compose(
            replace(
              '{min-new-lump-sum-amount}',
              formatCurrencyGBP(tax.minNewLumpSumAmount)
            ),
            replace(
              '{max-lump-sum-amount}',
              formatCurrencyGBP(tax.maxLumpSumAmount)
            )
          )
        ),
        over(
          lensPath(['monthlyPayments', 'monthlyPayment', 'monthlyHelpText']),
          compose(
            replace(
              '{min-new-monthly-amount}',
              formatCurrencyGBP(tax.minNewMonthlyAmount)
            )
          )
        ),
        over(
          lensPath([
            'monthlyPayments',
            'monthlyPayment',
            'monthlyAmount',
            'inputError',
          ]),
          compose(
            replace(
              '{max-monthly-amount}',
              formatCurrencyGBP(tax.maxMonthlyAmount)
            )
          )
        ),
        over(
          lensPath([
            'monthlyPayments',
            'monthlyPayment',
            'monthlyAmount',
            'inputOtherError',
          ]),
          compose(
            replace(
              '{min-new-monthly-amount}',
              formatCurrencyGBP(tax.minNewMonthlyAmount)
            )
          )
        ),
        over(
          lensPath([
            'monthlyAndLumpSum',
            'monthlyAndLumpSumPayment',
            'monthlyHelpText',
          ]),
          compose(
            replace(
              '{min-new-monthly-amount}',
              formatCurrencyGBP(tax.minNewMonthlyAmount)
            )
          )
        ),
        over(
          lensPath([
            'monthlyAndLumpSum',
            'monthlyAndLumpSumPayment',
            'lumpSumHelpText',
          ]),
          compose(
            replace(
              '{min-new-lump-sum-amount}',
              formatCurrencyGBP(tax.minNewLumpSumAmount)
            )
          )
        ),
        over(
          lensPath([
            'monthlyAndLumpSum',
            'monthlyAndLumpSumPayment',
            'summary',
          ]),
          compose(
            replace(
              '{total-annual-allowance}',
              formatCurrencyGBP(tax.totalAnnualAllowance)
            )
          )
        ),
        over(
          lensPath([
            'monthlyAndLumpSum',
            'monthlyAndLumpSumPayment',
            'lumpSumAmount',
            'inputError',
          ]),
          compose(
            replace(
              '{min-new-lump-sum-amount}',
              formatCurrencyGBP(tax.minNewLumpSumAmount)
            ),
            replace(
              '{max-lump-sum-amount}',
              formatCurrencyGBP(tax.maxLumpSumAmount)
            )
          )
        ),
        over(
          lensPath([
            'monthlyAndLumpSum',
            'monthlyAndLumpSumPayment',
            'monthlyAmount',
            'inputError',
          ]),
          compose(
            replace(
              '{max-monthly-amount}',
              formatCurrencyGBP(tax.maxMonthlyAmount)
            )
          )
        ),
        over(
          lensPath([
            'monthlyAndLumpSum',
            'monthlyAndLumpSumPayment',
            'monthlyAmount',
            'inputOtherError',
          ]),
          compose(
            replace(
              '{min-new-monthly-amount}',
              formatCurrencyGBP(tax.minNewMonthlyAmount)
            )
          )
        )
      )(this.pageContent);

      return placeholdersReplaced;
    })
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
