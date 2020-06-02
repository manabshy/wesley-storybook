import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { take, tap, finalize, takeWhile, switchMap } from 'rxjs/operators';
import { NgFormsManager } from '@ngneat/forms-manager';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ConfigService, Config } from '@wesleyan-frontend/wpisa/data-access';
import { nationalInsuranceNumberValidator } from '@wesleyan-frontend/shared/util-validators';

import { KnowledgeCheckFacade } from '../core/knowledge-check.facade';
import { isaRoutesNames } from '../isa-journey.routes.names';

@Component({
  selector: 'wes-customer-details-page',
  templateUrl: './customer-details-page.component.html',
  styleUrls: ['./customer-details-page.component.scss'],
})
export class CustomerDetailsPageComponent implements OnInit, OnDestroy {
  pageContent: Config;
  form: FormGroup;

  constructor(
    private configService: ConfigService,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title,
    private fb: FormBuilder
  ) {
    this.pageContent = this.configService.content;

    console.warn('@TODO - set page title tag');
    this.titleService.setTitle(this.pageContent.start.pageTitle);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: this.fb.group({
        day: ['', Validators.required],
        month: ['', Validators.required],
        year: ['', Validators.required],
      }),
      profession: [null, Validators.required],
      nationalInsuranceNumber: [
        '',
        [Validators.required, nationalInsuranceNumberValidator],
      ],
      nationality: [null, [Validators.required]],
      personalEmail: ['', [Validators.required, Validators.email]],
      personalMobileNumber: [null, Validators.required],
      marketingEmail: [null],
      marketingPost: [null],
      marketingPhone: [null],
    });

    this.formsManager.upsert('customerPersonalDetails', this.form, {
      withInitialValue: true,
    });
  }

  onSubmit() {}

  ngOnDestroy() {
    this.formsManager.unsubscribe('customerPersonalDetails');
  }
}
