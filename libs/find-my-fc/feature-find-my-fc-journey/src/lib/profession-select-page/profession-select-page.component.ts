import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';

import {
  ConfigService,
  ProfessionSelectorContent,
} from '@wesleyan-frontend/find-my-fc/data-access';

import { routesNames } from '../find-my-fc-journey.routes.names';
import { AppForms } from '../shared/app-forms.interface';

@Component({
  selector: 'wes-profession-select-page',
  templateUrl: './profession-select-page.component.html',
  styleUrls: ['./profession-select-page.component.scss'],
})
export class ProfessionSelectPageComponent implements OnInit {
  content: ProfessionSelectorContent;
  iconMap = {
    Hospital: 'Hospital',
    gppractice: 'GP Practice',
    Dental: 'Dental',
    Education: 'Education',
    Legal: 'Legal',
    Other: 'Other',
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
    //   this.optionsMap = this.content.areaOfWork.reduce((prev, curr) => {
    //       return {...prev, [curr.id]:{...curr, icon:}}
    //   },{})
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
