import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';

import {
  ConfigService,
  YourDetailsContent,
} from '@wesleyan-frontend/find-my-fc/data-access';
import {
  dateValidator,
  emailValidator,
  fullUkPostcodeValidatorPattern,
} from '@wesleyan-frontend/shared/util-validators';
import { CustomerDetailsFacade } from '../core/services/customer-details.facade';

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

  form: FormGroup = this.builder.group({
    email: [null, [Validators.required, emailValidator]],
    postcode: [
      null,
      [Validators.required, Validators.pattern(fullUkPostcodeValidatorPattern)],
    ],
    dateOfBirth: this.builder.group(
      {
        day: [null, Validators.required],
        month: [null, Validators.required],
        year: [null, Validators.required],
      },
      { validators: dateValidator }
    ),
  });

  emailControl = this.form.controls.email;
  postcodeControl = this.form.controls.postcode;
  dateOfBirthControl = this.form.controls.dateOfBirth;

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager<AppForms>,
    private configService: ConfigService,
    private customerDetailsFacade: CustomerDetailsFacade,
    private router: Router
  ) {
    this.content = this.configService.content.yourDetails;
  }

  ngOnInit(): void {
    this.formsManager.upsert('yourDetails', this.form);
  }

  onSubmit() {
    if (this.form.valid) {
      const { email, postcode, dateOfBirth } = this.form.value;
      const formattedDob = `${dateOfBirth.year}-${dateOfBirth.month}-${dateOfBirth.day}`;

      this.customerDetailsFacade.findFC(formattedDob, email, postcode);
    }
  }
}
