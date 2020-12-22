import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

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
export class PostcodePageComponent implements OnInit, OnDestroy {
  content: NewCustomerPostcodeContent;
  backLink = '';
  form: FormGroup = this.builder.group({
    postcode: [
      null,
      [Validators.required, Validators.pattern(fullUkPostcodeValidatorPattern)],
    ],
  });
  headingContent$: Observable<{ title: string; description: string }>;
  subscriptions = new Subscription();

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
    this.subscriptions.add(
      this.postcodeFacade.postcodeError$
        .pipe(tap((err) => this.setPostcodeInvalidOrServiceFailure()))
        .subscribe()
    );
  }

  setPostcodeInvalidOrServiceFailure() {
    this.form.controls.postcode.setErrors({ postcodeOrServiceFailure: true });
    this.form.controls.postcode.markAsDirty();
  }

  onSubmit() {
    if (this.form.valid) {
      this.postcodeFacade.findFC(this.form.value.postcode);
    }
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('newCustomerPostcode');
    this.subscriptions.unsubscribe();
  }
}
