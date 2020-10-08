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
  selector: 'wes-profession-select-page',
  templateUrl: './profession-select-page.component.html',
  styleUrls: ['./profession-select-page.component.scss'],
})
export class ProfessionSelectPageComponent implements OnInit {
  content;

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
    this.formsManager.upsert('professionSelect', this.form);
  }

  onSubmit() {
    this.router.navigate([`/${routesNames.POSTCODE}`]);
  }
}
