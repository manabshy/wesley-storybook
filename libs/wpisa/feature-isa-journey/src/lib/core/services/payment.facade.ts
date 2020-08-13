import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import {
  ConfigService,
  IFramePayment,
} from '@wesleyan-frontend/wpisa/data-access';

import { formatCurrencyGBP } from '../util-functions';
import { DeclarationFacade } from './declaration.facade';
import { isaRoutesNames } from '../../isa-journey.routes.names';

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
    private router: Router
  ) {
    this.pageContent = this.configService.content.payment;

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
      .subscribe();

    this.paymentUrl$
      .pipe(
        filter((url) => url === null),
        tap((_) => this.router.navigate([`${isaRoutesNames.DECLARATION}`]))
      )
      .subscribe();
  }
}
