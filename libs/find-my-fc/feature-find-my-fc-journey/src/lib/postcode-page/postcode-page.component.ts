import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import {
  ConfigService,
  NewCustomerPostcodeContent,
} from '@wesleyan-frontend/find-my-fc/data-access';
import { fullUkPostcodeValidatorPattern } from '@wesleyan-frontend/shared/util-validators';
import { routesNames } from '@wesleyan-frontend/find-my-fc/util-const';

import { PostcodeFacade } from '../core/services/postcode.facade';
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
    private titleService: Title
  ) {
    this.content = this.configService.content.newCustomerPostcode;
    this.headingContent$ = this.postcodeFacade.postcodePageContent$;
    this.backLink = `/${routesNames.PROFESSION_SELECT}`;
    this.titleService.setTitle(this.content.metaTitle);
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
