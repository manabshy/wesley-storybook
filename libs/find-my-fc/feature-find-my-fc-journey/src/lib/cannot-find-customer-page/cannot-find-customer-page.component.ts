import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';

import {
  CannotMatchCustomerContent,
  ConfigService,
  CustomerReferenceContent,
} from '@wesleyan-frontend/find-my-fc/data-access';
import { customerReferencePattern } from '@wesleyan-frontend/shared/util-validators';

import { CustomerReferenceFacade } from '../core/services/customer-reference.facade';
import { routesNames } from '../find-my-fc-journey.routes.names';
import { AppForms } from '../shared/app-forms.interface';

@Component({
  selector: 'wes-cannot-find-customer-page',
  templateUrl: './cannot-find-customer-page.component.html',
  styleUrls: ['./cannot-find-customer-page.component.scss'],
})
export class CannotFindCustomerPageComponent implements OnInit {
  content: CannotMatchCustomerContent;

  constructor(
    private configService: ConfigService,
    private customerReferenceFacade: CustomerReferenceFacade,
    private router: Router
  ) {
    this.content = this.configService.content.cannotMatchCustomer;
  }

  ngOnInit(): void {}
}
