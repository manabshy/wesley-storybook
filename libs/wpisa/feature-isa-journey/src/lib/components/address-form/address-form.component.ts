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

import { KnowledgeCheckFacade } from '../../core/knowledge-check.facade';
import { isaRoutesNames } from '../../isa-journey.routes.names';

@Component({
  selector: 'wes-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit, OnDestroy {
  pageContent: YourDetails;
  form: FormGroup;
  submitAttempt = false;
  controls: { [key: string]: AbstractControl } = {};
  addressList: PostcodeLookupAddress[] = [];
  isManualAddressVisible = false;

  constructor(
    private configService: ConfigService,
    private formsManager: NgFormsManager,
    private fb: FormBuilder,
    private addressLookupService: AddressLookupService
  ) {
    this.pageContent = this.configService.content.yourDetails;
  }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        postcodeLookup: ['', Validators.required],
        selectedAddressId: [''],
        flatNumber: [''],
        houseNumber: ['', [Validators.required]],
        houseName: [''],
        street: ['', [Validators.required]],
        town: ['', [Validators.required]],
        region: [''],
        county: [''],
        postcode: ['', [Validators.required]],
      },
      { updateOn: 'blur' }
    );

    Object.keys(this.form.controls).forEach((key) => {
      this.controls[key] = this.form.controls[key];
    });

    this.formsManager.upsert('address', this.form, {
      withInitialValue: true,
    });
  }

  onSubmit() {
    this.submitAttempt = true;
    this.form.markAllAsTouched();

    if (this.form.valid) {
    }
  }

  findAddress(postcode) {
    this.addressLookupService
      .findByPostcode(postcode)
      .pipe(
        tap((resp) => {
          console.log(resp);
          const a =
            resp === null
              ? this.controls.postcodeLookup.setErrors({ invalid: true })
              : (this.addressList = resp.addresses);
        }),
        take(1)
      )
      .subscribe(console.log);
  }
  handleAddressSelect(e) {
    console.log(e.target.value);
    this.addressLookupService
      .getAddressDetails(e.target.value)
      .pipe(
        tap((address) => this.updateFormValues(address)),
        take(1)
      )
      .subscribe(console.log);
  }

  showManualAddress() {
    this.isManualAddressVisible = true;
  }
  showFindAddress() {
    this.isManualAddressVisible = false;
  }

  updateFormValues(address: AddressDetails) {
    this.form.patchValue({
      postcode: address.postcode,
      town: address.town,
      country: address.country,
      houseNumber: address.line1,
      street: address.line2,
    });
  }
  ngOnDestroy() {
    this.formsManager.unsubscribe('customerPersonalDetails');
  }
}
