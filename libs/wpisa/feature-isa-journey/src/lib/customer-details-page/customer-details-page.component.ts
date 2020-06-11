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
  FormControl,
  AbstractControl,
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
import {
  AddressLookupService,
  PostcodeLookupAddress,
  AddressDetails,
} from '@wesleyan-frontend/shared/data-access-api';

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
  submitAttempt = false;
  controls: { [key: string]: AbstractControl } = {};
  isManualAddressVisible = false;

  constructor(
    private configService: ConfigService,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title,
    private fb: FormBuilder,
    private addressLookupService: AddressLookupService
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

    this.formsManager.valueChanges('customerPersonalDetails').subscribe(() => {
      this.submitAttempt = false;
    });
  }
  onSelectedAddress(address: AddressDetails) {
    console.log('Got address', address);
    this.updateFormValues(address);
  }
  onShowManualAddress(event) {
    this.isManualAddressVisible = true;
    this.form.controls.addressLookup.clearValidators();
    this.form.controls.addressLookup.updateValueAndValidity();
    this.form.controls.addressLookup.reset({});

    this.form.controls.manualAddress.reset({});
    this.form.controls.manualAddress.updateValueAndValidity();
    this.formsManager.clear('manualAddress');
  }
  onShowAddressLookup() {
    this.isManualAddressVisible = false;
    this.form.controls.addressLookup.setValidators([Validators.required]);
    this.form.controls.addressLookup.updateValueAndValidity();
    this.formsManager.clear('addressLookup');

    this.form.controls.manualAddress.reset({});
    this.formsManager.clear('manualAddress');
  }
  updateFormValues(address: AddressDetails) {
    this.form.controls.manualAddress.patchValue({
      postcode: address.postcode,
      town: address.town,
      country: address.country,
      houseNumber: address.line1,
      street: address.line1,
    });
  }
  onSubmit() {
    this.submitAttempt = true;
    this.form.markAllAsTouched();
    console.log(this.form);
    if (this.form.valid) {
      this.router.navigate([`/${isaRoutesNames.INVESTMENT_OPTIONS}`]);
    }
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('customerPersonalDetails');
  }
}
