import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Router } from '@angular/router';
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

import { CustomerFacade } from '../core/services/customer.facade';
import { routesNames } from '../find-my-fc-journey.routes.names';
import { AppForms } from '../shared/app-forms.interface';

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

  form: FormGroup = this.builder.group({
    email: [null, [Validators.required, emailValidator]],
    postcode: [
      null,
      [Validators.required, Validators.pattern(fullUkPostcodeValidatorPattern)],
    ],
    dateOfBirth: this.builder.group(
      {
        day: ['', [Validators.required, Validators.max(31), Validators.min(1)]],
        month: [
          '',
          [Validators.required, Validators.max(12), Validators.min(1)],
        ],
        year: ['', Validators.required],
      },
      { validators: [Validators.required, dateValidator], updateOn: 'blur' }
    ),
  });

  emailControl = this.form.controls.email;
  postcodeControl = this.form.controls.postcode;
  dateOfBirthControl = this.form.controls.dateOfBirth;

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager<AppForms>,
    private configService: ConfigService,
    private customerFacade: CustomerFacade,
    private router: Router
  ) {
    this.content = this.configService.content.yourDetails;
    this.backLink = `/${routesNames.CUSTOMER_SELECT}`;
  }

  ngOnInit(): void {
    this.formsManager.upsert('yourDetails', this.form);

    this.customerFacade.resetRetryCounter();
    this.showCustomerNotFoundError$ = this.customerFacade.invalidCustomerReference$;
  }

  onSubmit() {
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
