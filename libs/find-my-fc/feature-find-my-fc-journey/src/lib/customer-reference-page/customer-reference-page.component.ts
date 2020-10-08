import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';

import { ConfigService } from '@wesleyan-frontend/find-my-fc/data-access';
import { routesNames } from '../find-my-fc-journey.routes.names';
import { AppForms } from '../shared/app-forms.interface';

@Component({
  selector: 'wes-customer-reference-page',
  templateUrl: './customer-reference-page.component.html',
  styleUrls: ['./customer-reference-page.component.scss'],
})
export class CustomerReferencePageComponent implements OnInit {
  content;

  form: FormGroup = this.builder.group({
    ref: [null, [Validators.required]],
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
    this.formsManager.upsert('customerReference', this.form);
  }

  onSubmit() {
    //Find fc
    // this.router.navigate([`/${routesNames.POSTCODE}`]);
  }
}
