import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {
  take,
  tap,
  finalize,
  takeWhile,
  switchMap,
  startWith,
  mapTo,
  map,
} from 'rxjs/operators';
import { NgFormsManager } from '@ngneat/forms-manager';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';

import {
  ConfigService,
  YourDetails,
} from '@wesleyan-frontend/wpisa/data-access';
import {
  nationalInsuranceNumberValidator,
  isaAgeValidator,
  mobilePhoneUKValidator,
  emailValidator,
} from '@wesleyan-frontend/shared/util-validators';

import { KnowledgeCheckFacade } from '../core/knowledge-check.facade';
import { isaRoutesNames } from '../isa-journey.routes.names';

@Component({
  selector: 'wes-customer-details-page',
  templateUrl: './customer-details-page.component.html',
  styleUrls: ['./customer-details-page.component.scss'],
})
export class CustomerDetailsPageComponent implements OnInit, OnDestroy {
  pageContent: YourDetails;
  form: FormGroup;

  constructor(
    private configService: ConfigService,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title,
    private fb: FormBuilder
  ) {
    this.pageContent = this.configService.content.yourDetails;

    this.titleService.setTitle(this.pageContent.metaTitle);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: this.fb.group(
        {
          day: [
            '',
            [Validators.required, Validators.min(1), Validators.max(31)],
          ],
          month: [
            '',
            [Validators.required, Validators.min(1), Validators.max(12)],
          ],
          year: ['', Validators.required],
        },
        { validators: isaAgeValidator }
      ),
      profession: [null, Validators.required],
      nationalInsuranceNumber: [
        '',
        [Validators.required, nationalInsuranceNumberValidator],
      ],
      nationality: [null, [Validators.required]],
      personalEmail: ['', [Validators.required, emailValidator]],
      personalMobileNumber: ['', [Validators.required, mobilePhoneUKValidator]],
      marketingEmail: [null],
      marketingPost: [null],
      marketingPhone: [null],
    });

    this.formsManager.upsert('customerPersonalDetails', this.form, {
      withInitialValue: true,
    });
  }
  getType() {
    return 'text';
  }
  onSubmit() {}

  ngOnDestroy() {
    this.formsManager.unsubscribe('customerPersonalDetails');
  }
}
