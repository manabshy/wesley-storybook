import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { customerReferencePattern } from '@wesleyan-frontend/shared/util-validators';
import {
  ConfigService,
  CustomerReferenceContent,
} from '@wesleyan-frontend/find-my-fc/data-access';
import { routesNames } from '@wesleyan-frontend/find-my-fc/util-const';

import { FinancialConsultantFacade } from '../core/services/financial-consultant.facade';
import { AppForms } from '../shared/app-forms.interface';

@Component({
  selector: 'wes-customer-reference-page',
  templateUrl: './customer-reference-page.component.html',
  styleUrls: ['./customer-reference-page.component.scss'],
})
export class CustomerReferencePageComponent implements OnInit, OnDestroy {
  content: CustomerReferenceContent;
  subscriptions$ = new Subscription();
  backLink = '';

  form: FormGroup = this.builder.group({
    ref: [
      null,
      [Validators.required, Validators.pattern(customerReferencePattern)],
    ],
  });
  refControl = this.form.controls.ref;

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager<AppForms>,
    private configService: ConfigService,
    private fcFacade: FinancialConsultantFacade,
    private titleService: Title
  ) {
    this.content = this.configService.content.customerReference;
    this.backLink = `/${routesNames.YOUR_DETAILS}`;
    this.titleService.setTitle(this.content.metaTitle);
  }

  ngOnInit(): void {
    this.formsManager.upsert('customerReference', this.form);

    this.fcFacade.resetRetryCounter();
    this.subscriptions$.add(
      this.fcFacade.invalidCustomerReference$
        .pipe(tap((_) => this.setFieldError()))
        .subscribe()
    );
  }

  setFieldError() {
    this.refControl.setErrors({ invalidCustomerReference: true });
    this.refControl.markAsDirty();
  }

  onSubmit() {
    if (this.form.valid) {
      this.fcFacade.findFCByCustomerReference(this.form.value.ref);
    }
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
