import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { tap, switchMapTo, take, startWith } from 'rxjs/operators';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';

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
import { AddressDetails } from '@wesleyan-frontend/shared/data-access-api';

import { GenericDropdownItem } from '../core/models/generic-dropdown-item.interface';
import { OnSubmitOrHasValueErrorStateMatcher } from '../core/error-state-matcher';
import { CustomerDetailsFacade } from '../core/services/customer-details.facade';
import { AppStateFacade } from '../core/services/app-state-facade';
import { isaRoutesNames } from '../isa-journey.routes.names';
import { AppForms } from '../core/models/app-forms.interface';

@Component({
  selector: 'wes-customer-details-page',
  templateUrl: './customer-details-page.component.html',
  styleUrls: ['./customer-details-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomerDetailsPageComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dob: this.fb.group(
      {
        day: ['', Validators.required],
        month: ['', Validators.required],
        year: ['', Validators.required],
      },
      { validators: isaAgeValidator }
    ),
    profession: ['', Validators.required],
    nationalInsuranceNumber: [
      '',
      [Validators.required, nationalInsuranceNumberValidator],
    ],
    nationality: ['', [Validators.required]],
    addressLookup: ['', Validators.required],
    manualAddress: ['', Validators.required],
    personalEmail: [
      '',
      { validators: [Validators.required, emailValidator], updateOn: 'blur' },
    ],
    personalMobileNumber: [
      '',
      {
        validators: [Validators.required, mobilePhoneUKValidator],
        updateOn: 'blur',
      },
    ],
    marketingEmail: [null],
    marketingPost: [null],
    marketingPhone: [null],
  });

  emptyOptionLabel = 'Please select';
  pageContent: YourDetails;
  overallErrorContent;

  private submitAttemptSubject$ = new BehaviorSubject(false);
  submitAttempt$ = this.submitAttemptSubject$.asObservable();
  showOverallError = false;
  controls: { [key: string]: AbstractControl } = {};
  isManualAddressVisible = false;
  subscriptions = new Subscription();
  errorStateMatcher = new OnSubmitOrHasValueErrorStateMatcher();

  titleList$: Observable<GenericDropdownItem[]> = this.customerDetailsFacade
    .titleList$;
  nationalityList$: Observable<GenericDropdownItem[]> = this
    .customerDetailsFacade.nationalityList$;
  marketSegmentList$: Observable<GenericDropdownItem[]> = this
    .customerDetailsFacade.marketSegmentList$;

  constructor(
    private configService: ConfigService,
    private router: Router,
    private formsManager: NgFormsManager<AppForms>,
    private titleService: Title,
    private fb: FormBuilder,
    private customerDetailsFacade: CustomerDetailsFacade,
    private appStateFacade: AppStateFacade
  ) {
    this.pageContent = this.configService.content.yourDetails;
    this.overallErrorContent = this.configService.content.validationSummary;
    this.titleService.setTitle(this.pageContent.metaTitle);

    this.controls = this.form.controls;

    this.formsManager.upsert('customerPersonalDetails', this.form);

    if (this.appStateFacade.state?.forms?.customerPersonalDetails) {
      this.formsManager.patchValue(
        'customerPersonalDetails',
        this.appStateFacade.state.forms.customerPersonalDetails
      );
    }
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.form.statusChanges
        .pipe(
          startWith(false),
          tap((_) =>
            this.form.valid ? this.submitAttemptSubject$.next(false) : ''
          ),
          switchMapTo(this.submitAttempt$),
          tap((submitAttempt) => {
            this.showOverallError = this.form.invalid && submitAttempt;
            this.errorStateMatcher.submitted = this.showOverallError;
          })
        )
        .subscribe()
    );
  }

  onFindPostcode(postcode: string) {
    this.resetManualAddress();
  }

  onSelectedAddress(address: AddressDetails) {
    this.updateManualAddressFormValues(address);
    if (this.form.controls.manualAddress.invalid) {
      //Missing required fields
      this.isManualAddressVisible = true;
    }
  }

  onShowManualAddress() {
    this.isManualAddressVisible = true;
    this.form.controls.addressLookup.clearValidators();
    this.resetAddressLookup();

    this.resetManualAddress();
  }

  onShowAddressLookup() {
    this.isManualAddressVisible = false;
    this.form.controls.addressLookup.setValidators([Validators.required]);
    this.resetManualAddress();
  }

  resetManualAddress() {
    this.form.controls.manualAddress.updateValueAndValidity();
    this.form.controls.manualAddress.reset({});
    this.formsManager.clear('manualAddress');
  }

  resetAddressLookup() {
    this.form.controls.addressLookup.updateValueAndValidity();
    this.form.controls.addressLookup.reset({});
    this.formsManager.clear('addressLookup');
  }

  updateManualAddressFormValues(address: AddressDetails) {
    this.form.controls.manualAddress.patchValue(
      this.customerDetailsFacade.mapToManualFormAddress(address)
    );
  }

  isFieldInvalid(field: string) {
    return this.form.get(field).invalid && this.showOverallError;
  }

  onSubmit() {
    this.form.markAllAsTouched();
    this.submitAttemptSubject$.next(true);

    if (this.form.valid) {
      this.subscriptions.add(
        this.customerDetailsFacade
          .submit(this.form.value)
          .pipe(
            tap(() =>
              this.router.navigate([`/${isaRoutesNames.INVESTMENT_OPTIONS}`])
            )
          )
          .subscribe()
      );
    }
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('customerPersonalDetails');
    this.subscriptions.unsubscribe();
  }
}
