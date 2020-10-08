import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';

import { ConfigService } from '@wesleyan-frontend/find-my-fc/data-access';
import { routesNames } from '../find-my-fc-journey.routes.names';
import { AppForms } from '../shared/app-forms.interface';

const NEW_CUSTOMER = 'new';
const EXISTING_CUSTOMER = 'existing';

@Component({
  selector: 'wes-customer-select-page',
  templateUrl: './customer-select-page.component.html',
  styleUrls: ['./customer-select-page.component.scss'],
})
export class CustomerSelectPageComponent implements OnInit {
  content;
  questionMap = {
    [NEW_CUSTOMER]: { value: NEW_CUSTOMER, label: 'I’m a new customer' },
    [EXISTING_CUSTOMER]: {
      value: EXISTING_CUSTOMER,
      label: "I'm an existing Wesleyan customer",
    },
  };

  form: FormGroup = this.builder.group({
    type: [null, Validators.required],
  });

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager<AppForms>,
    private configService: ConfigService,
    private router: Router
  ) {
    this.content = this.configService.content;
  }

  ngOnInit(): void {
    this.formsManager.upsert('customerSelect', this.form);
  }

  onSubmit() {
    if (this.form.get('type').value === NEW_CUSTOMER) {
      this.router.navigate([`/${routesNames.PROFESSION_SELECT}`]);
    } else {
      this.router.navigate([`/${routesNames.YOUR_DETAILS}`]);
    }
  }
}
