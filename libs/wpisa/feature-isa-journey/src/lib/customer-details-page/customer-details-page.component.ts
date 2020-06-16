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
  switchMapTo,
} from 'rxjs/operators';
import { NgFormsManager } from '@ngneat/forms-manager';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  ValidationErrors,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';

import {
  ConfigService,
  YourDetails,
  ISAApiService,
} from '@wesleyan-frontend/wpisa/data-access';
import {
  nationalInsuranceNumberValidator,
  isaAgeValidator,
  mobilePhoneUKValidator,
  emailValidator,
} from '@wesleyan-frontend/shared/util-validators';
import {
  AddressLookupService,
  PostcodeLookupAddress,
  AddressDetails,
} from '@wesleyan-frontend/shared/data-access-api';

import { KnowledgeCheckFacade } from '../core/knowledge-check.facade';
import { isaRoutesNames } from '../isa-journey.routes.names';
import { CustomerDetailsFacade } from '../core/customer-details.facade';

@Component({
  selector: 'wes-customer-details-page',
  templateUrl: './customer-details-page.component.html',
  styleUrls: ['./customer-details-page.component.scss'],
})
export class CustomerDetailsPageComponent implements OnInit, OnDestroy {
  pageContent: YourDetails;
  overallErrorContent;
  form: FormGroup;
  private submitAttemptSubject$ = new BehaviorSubject(false);
  submitAttempt$ = this.submitAttemptSubject$.asObservable();
  showOverallError = false;
  controls: { [key: string]: AbstractControl } = {};
  isManualAddressVisible = false;
  subscriptions = new Subscription();

  titleList$: Observable<{ value: string; description: string }[]> = this
    .customerDetailsFacade.titleList$;
  nationalityList$: Observable<{ value: string; description: string }[]> = this
    .customerDetailsFacade.nationalityList$;
  marketSegmentList$: Observable<
    { value: string; description: string }[]
  > = this.customerDetailsFacade.marketSegmentList$;

  constructor(
    private configService: ConfigService,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title,
    private fb: FormBuilder,
    private addressLookupService: AddressLookupService,
    private customerDetailsFacade: CustomerDetailsFacade,
    private isaApiService: ISAApiService
  ) {
    this.pageContent = this.configService.content.yourDetails;
    this.overallErrorContent = this.configService.content.validationSummary;
    this.titleService.setTitle(this.pageContent.metaTitle);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: this.fb.group(
        {
          day: [''],
          month: [''],
          year: [''],
        },
        { validators: isaAgeValidator }
      ),
      profession: [null, Validators.required],
      nationalInsuranceNumber: [
        '',
        [Validators.required, nationalInsuranceNumberValidator],
      ],
      nationality: [null, [Validators.required]],
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

    this.controls = this.form.controls;

    this.formsManager.upsert('customerPersonalDetails', this.form, {
      withInitialValue: true,
    });

    this.subscriptions.add(
      this.form.statusChanges
        .pipe(
          tap((_) =>
            this.form.valid ? this.submitAttemptSubject$.next(false) : ''
          ),
          switchMapTo(this.submitAttempt$),
          tap((submitAttempt) => {
            this.showOverallError = this.form.invalid && submitAttempt;
          })
        )
        .subscribe()
    );
  }

  onFindPostcode(postcode: string) {
    this.resetManualAddress();
  }

  onSelectedAddress(address: AddressDetails) {
    console.log('Got address', address);
    this.updateManualAddressFormValues(address);
  }

  onShowManualAddress(event) {
    this.isManualAddressVisible = true;
    this.form.controls.addressLookup.clearValidators();
    this.resetAddressLookup();

    this.resetManualAddress();
  }

  onShowAddressLookup() {
    this.isManualAddressVisible = false;
    this.form.controls.addressLookup.setValidators([Validators.required]);
    this.resetManualAddress();

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
    this.form.controls.manualAddress.patchValue({
      postcode: address.postcode,
      town: address.town,
      country: address.country,
      houseNumber: address.line1,
      street: address.line1,
    });
  }

  isFieldInvalid(field: string) {
    return this.form.get(field).invalid && this.showOverallError;
  }

  onSubmit() {
    this.submitAttemptSubject$.next(true);
    console.log(this.form);
    if (this.form.valid) {
      this.router.navigate([`/${isaRoutesNames.INVESTMENT_OPTIONS}`]);
    } else {
      this.showOverallError = true;
    }
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('customerPersonalDetails');
    this.subscriptions.unsubscribe();
  }
}
