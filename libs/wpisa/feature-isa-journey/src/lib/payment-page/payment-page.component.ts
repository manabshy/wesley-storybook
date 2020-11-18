import { DomSanitizer, SafeUrl, Title } from '@angular/platform-browser';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { IFramePayment } from '@wesleyan-frontend/wpisa/data-access';

import { PaymentFacade } from '../core/services/payment.facade';

@Component({
  selector: 'wes-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaymentPageComponent implements OnDestroy {
  iframeUrl: SafeUrl;
  pageContent: IFramePayment;
  paymentUrl$ = this.paymentFacade.paymentUrl$;
  subscriptions$ = new Subscription();

  constructor(
    private paymentFacade: PaymentFacade,
    private titleService: Title
  ) {
    this.subscriptions$.add(
      this.paymentFacade.pageContent$.subscribe((content) => {
        this.pageContent = content;
        this.titleService.setTitle(content.metaTitle);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
