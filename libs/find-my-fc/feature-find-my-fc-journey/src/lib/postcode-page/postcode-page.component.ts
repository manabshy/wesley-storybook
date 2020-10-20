import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Observable } from 'rxjs';

import {
  ConfigService,
  NewCustomerPostcodeContent,
} from '@wesleyan-frontend/find-my-fc/data-access';
import { fullUkPostcodeValidatorPattern } from '@wesleyan-frontend/shared/util-validators';
import { routesNames } from '@wesleyan-frontend/find-my-fc/util-const';

import { PostcodeFacade } from '../core/services/postcode.facade';
import { ProfessionFacade } from '../core/services/profession.facade';
import { AppForms } from '../shared/app-forms.interface';

@Component({
  selector: 'wes-postcode-page',
  templateUrl: './postcode-page.component.html',
  styleUrls: ['./postcode-page.component.scss'],
})
export class PostcodePageComponent implements OnInit {
  content: NewCustomerPostcodeContent;
  backLink = '';
  form: FormGroup = this.builder.group({
    postcode: [
      null,
      [Validators.required, Validators.pattern(fullUkPostcodeValidatorPattern)],
    ],
  });
  headingContent$: Observable<{ title: string; description: string }>;

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager<AppForms>,
    private configService: ConfigService,
    private postcodeFacade: PostcodeFacade,
    private professionFacade: ProfessionFacade,
    private router: Router
  ) {
    this.content = this.configService.content.newCustomerPostcode;
    this.headingContent$ = this.postcodeFacade.postcodePageContent$;
    this.backLink = `/${routesNames.PROFESSION_SELECT}`;
  }

  ngOnInit(): void {
    this.formsManager.upsert('newCustomerPostcode', this.form);
  }

  onSubmit() {
    if (this.form.valid) {
      this.postcodeFacade.findFC(this.form.value.postcode);
    }
  }
}
