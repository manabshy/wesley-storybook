import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';

import {
  ConfigService,
  ProfessionSelectorContent,
} from '@wesleyan-frontend/find-my-fc/data-access';
import { routesNames } from '@wesleyan-frontend/find-my-fc/util-const';

import { AppForms } from '../shared/app-forms.interface';

@Component({
  selector: 'wes-profession-select-page',
  templateUrl: './profession-select-page.component.html',
  styleUrls: ['./profession-select-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfessionSelectPageComponent implements OnInit {
  content: ProfessionSelectorContent;
  backLink = '';
  iconMap = {
    HospitalDoctor: 'heart',
    GP: 'stethoscope',
    Dentist: 'tooth',
    Teacher: 'open-book',
    Lawyer: 'legal',
    Undefined: 'briefcase',
  };
  form: FormGroup = this.builder.group({
    sector: [null, Validators.required],
  });

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager<AppForms>,
    private configService: ConfigService,
    private router: Router
  ) {
    this.content = this.configService.content.professionSelector;
    this.backLink = `/${routesNames.CUSTOMER_SELECT}`;
  }

  ngOnInit(): void {
    this.formsManager.upsert('professionSelect', this.form);
  }

  onSubmit() {
    this.router.navigate([`/${routesNames.POSTCODE}`]);
  }

  formatTestLabel(value: string) {
    return value.replace(/\s/g, '');
  }
}
