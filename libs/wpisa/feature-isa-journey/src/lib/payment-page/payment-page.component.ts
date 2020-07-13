import { DomSanitizer, SafeUrl, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { IFramePayment } from '@wesleyan-frontend/wpisa/data-access';
import { Subscription } from 'rxjs';
import { DeclarationFacade } from '../core/declaration.facade';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';
import { tap } from 'rxjs/operators';
import { PaymentFacade } from '../core/payment.facade';

@Component({
  selector: 'wes-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss'],
})
export class PaymentPageComponent implements OnInit {
  iframeUrl: SafeUrl;
  pageContent: IFramePayment;
  paymentUrl$ = this.paymentFacade.paymentUrl$;
  subscriptions$ = new Subscription();

  constructor(
    private paymentFacade: PaymentFacade,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title,
    private sanitizer: DomSanitizer
  ) {
    this.subscriptions$.add(
      this.paymentFacade.pageContent$.subscribe((content) => {
        this.pageContent = content;
        this.titleService.setTitle(content.metaTitle);
        console.log(this.pageContent);
      })
    );
  }

  ngOnInit(): void {}
}
