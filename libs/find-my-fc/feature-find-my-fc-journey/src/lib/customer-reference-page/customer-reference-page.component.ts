import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFormsManager } from '@ngneat/forms-manager';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { customerReferencePattern } from '@wesleyan-frontend/shared/util-validators';
import {
  ConfigService,
  CustomerReferenceContent,
} from '@wesleyan-frontend/find-my-fc/data-access';

import { CustomerReferenceFacade } from '../core/services/customer-reference.facade';
import { routesNames } from '../find-my-fc-journey.routes.names';
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
    private customerReferenceFacade: CustomerReferenceFacade
  ) {
    this.content = this.configService.content.customerReference;
    this.backLink = `/${routesNames.YOUR_DETAILS}`;
  }

  ngOnInit(): void {
    this.formsManager.upsert('customerReference', this.form);

    this.subscriptions$.add(
      this.customerReferenceFacade.invalidCustomerReference$
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
      this.customerReferenceFacade.findFC(this.form.value.ref);
    }
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
