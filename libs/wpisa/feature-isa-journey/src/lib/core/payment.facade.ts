import { Injectable, OnInit } from '@angular/core';
import { NgFormsManager } from '@ngneat/forms-manager';
import {
  Observable,
  of,
  BehaviorSubject,
  combineLatest,
  throwError,
  Subscription,
} from 'rxjs';
import {
  map,
  filter,
  tap,
  take,
  startWith,
  catchError,
  concatMap,
  finalize,
  switchMap,
} from 'rxjs/operators';
import { format } from 'date-fns';

import {
  ISAApiService,
  ConfigService,
  Declaration,
  CurrentTaxPeriodISALimits,
  SubmitTransactionDTO,
  PaymentType,
  DirectDebitType,
  OnlineDirectDebitDetails,
  IFramePayment,
} from '@wesleyan-frontend/wpisa/data-access';
import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';

import { CustomerDetailsFacade } from './customer-details.facade';
import { AppForms } from './app-forms.interface';
import { CustomerDetailsFormValue } from './customer-details-form-value.interface';
import { PersonalDetailsViewModel } from './personal-details-view-model.interface';
import { ManualAddressFormValue } from '../components/manual-address-form/manual-address-form-value.interface';
import { DirectDebitViewModel } from './direct-debit-view-model.interface';
import { DirectDebitFormValue } from '../components/direct-debit-form/direct-debit-form-value.interface';
import { InvestmentCardViewModel } from './investment-card-view-model.interface';
import { formatCurrencyGBP } from './util-functions';
import {
  InvestmentOptionPaymentTypeStrings,
  InvestmentOptionPaymentType,
} from './investment-option-form-value.interface';
import { isaRoutesNames } from '../isa-journey.routes.names';
import { KnowledgeCheckFacade } from './knowledge-check.facade';
import { DeclarationFacade } from './declaration.facade';

@Injectable({
  providedIn: 'root',
})
export class PaymentFacade {
  private pageContent: IFramePayment;
  private pageContentSubject$ = new BehaviorSubject<IFramePayment>(null);

  subscriptions$ = new Subscription();

  pageContent$ = this.pageContentSubject$.asObservable();
  lumpSumAmount$: Observable<number> = this.declarationFacade.lumpSumAmount$;
  paymentUrl$: Observable<string> = this.declarationFacade.paymentUrl$;

  constructor(
    private configService: ConfigService,
    private declarationFacade: DeclarationFacade,
    private formManager: NgFormsManager<AppForms>,
    private loadingService: OverlayProgressSpinnerService
  ) {
    this.pageContent = this.configService.content.payment;

    this.subscriptions$.add(
      this.lumpSumAmount$
        .pipe(
          tap((lumpSum) =>
            this.pageContentSubject$.next({
              ...this.pageContent,
              summary: this.pageContent.summary.replace(
                '{lump-sum}',
                formatCurrencyGBP(lumpSum)
              ),
            })
          )
        )
        .subscribe()
    );
  }
}
