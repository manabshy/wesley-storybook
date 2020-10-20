import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';

import {
  ConfigService,
  CustomerSelectorContent,
} from '@wesleyan-frontend/find-my-fc/data-access';
import { routesNames } from '@wesleyan-frontend/find-my-fc/util-const';

import { AppForms } from '../shared/app-forms.interface';
import { CustomerType } from '../shared/customer-type.interface';

@Component({
  selector: 'wes-customer-select-page',
  templateUrl: './customer-select-page.component.html',
  styleUrls: ['./customer-select-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomerSelectPageComponent implements OnInit {
  content: CustomerSelectorContent;
  questionMap = {
    [CustomerType.NEW_CUSTOMER]: {
      value: CustomerType.NEW_CUSTOMER,
      label: 'I’m a new customer',
    },
    [CustomerType.EXISTING_CUSTOMER]: {
      value: CustomerType.EXISTING_CUSTOMER,
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
    this.content = this.configService.content.customerSelector;
    console.log(this.content);
    this.questionMap[
      CustomerType.NEW_CUSTOMER
    ].label = this.content.newCustomerLabel;
    this.questionMap[
      CustomerType.EXISTING_CUSTOMER
    ].label = this.content.existingCustomerLabel;
  }

  ngOnInit(): void {
    this.formsManager.upsert('customerSelect', this.form);
  }

  onSubmit() {
    if (this.form.get('type').value === CustomerType.NEW_CUSTOMER) {
      this.router.navigate([`/${routesNames.PROFESSION_SELECT}`]);
    } else {
      this.router.navigate([`/${routesNames.YOUR_DETAILS}`]);
    }
  }
}
