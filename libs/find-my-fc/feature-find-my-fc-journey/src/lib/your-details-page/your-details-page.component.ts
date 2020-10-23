import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {
  ConfigService,
  YourDetailsContent,
} from '@wesleyan-frontend/find-my-fc/data-access';
import {
  dateValidator,
  emailValidator,
  fullUkPostcodeValidatorPattern,
} from '@wesleyan-frontend/shared/util-validators';
import { routesNames } from '@wesleyan-frontend/find-my-fc/util-const';

import { CustomerFacade } from '../core/services/customer.facade';
import { AppForms } from '../shared/app-forms.interface';
import { OnSubmitOrHasValueErrorStateMatcher } from '../shared/error-state-matcher';

@Component({
  selector: 'wes-your-details-page',
  templateUrl: './your-details-page.component.html',
  styleUrls: ['./your-details-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class YourDetailsPageComponent implements OnInit {
  content: YourDetailsContent;
  backLink = '';
  showCustomerNotFoundError$: Observable<boolean>;
  errorStateMatcher = new OnSubmitOrHasValueErrorStateMatcher();
  submitted = false;

  form: FormGroup = this.builder.group(
    {
      email: [null, [Validators.required, emailValidator]],
      postcode: [
        null,
        [
          Validators.required,
          Validators.pattern(fullUkPostcodeValidatorPattern),
        ],
      ],
      dateOfBirth: this.builder.group(
        {
          day: [
            '',
            [Validators.required, Validators.max(31), Validators.min(1)],
          ],
          month: [
            '',
            [Validators.required, Validators.max(12), Validators.min(1)],
          ],
          year: ['', Validators.required],
        },
        { validators: [dateValidator], updateOn: 'blur' }
      ),
    },
    { updateOn: 'blur' }
  );

  emailControl = this.form.controls.email;
  postcodeControl = this.form.controls.postcode;
  dateOfBirthControl = this.form.controls.dateOfBirth;

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager<AppForms>,
    private configService: ConfigService,
    private customerFacade: CustomerFacade,
    private viewPortScroller: ViewportScroller
  ) {
    this.content = this.configService.content.yourDetails;
    this.backLink = `/${routesNames.CUSTOMER_SELECT}`;
  }

  ngOnInit(): void {
    this.formsManager.upsert('yourDetails', this.form);

    this.customerFacade.resetRetryCounter();
    this.showCustomerNotFoundError$ = this.customerFacade.invalidCustomerReference$.pipe(
      tap((_) => this.viewPortScroller.scrollToPosition([0, 0]))
    );
  }
  isFieldInvalid(field: string) {
    return this.form.get(field).invalid && this.submitted;
  }
  onSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      const { email, postcode, dateOfBirth } = this.form.value;
      const formattedDob = `${dateOfBirth.year}-${dateOfBirth.month}-${dateOfBirth.day}`;

      this.customerFacade.findFCByCustomerDetails(
        formattedDob,
        email,
        postcode
      );
    }
  }
}
