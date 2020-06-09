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
  addressList: PostcodeLookupAddress[] = [];

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
    this.form = this.fb.group(
      {
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
        address: this.fb.group({
          postcode: ['', Validators.required],
          selectedAddress: [''],
        }),
        personalEmail: ['', [Validators.required, emailValidator]],
        personalMobileNumber: [
          '',
          [Validators.required, mobilePhoneUKValidator],
        ],
        marketingEmail: [null],
        marketingPost: [null],
        marketingPhone: [null],
      },
      { updateOn: 'blur' }
    );

    Object.keys(this.form.controls).forEach((key) => {
      this.controls[key] = this.form.controls[key];
    });

    this.formsManager.upsert('customerPersonalDetails', this.form, {
      withInitialValue: true,
    });
  }
  getType() {
    return 'text';
  }
  onSubmit() {
    this.submitAttempt = true;
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.router.navigate([`/${isaRoutesNames.INVESTMENT_OPTIONS}`]);
    }
  }

  findAddress(postcode) {
    this.addressLookupService
      .findByPostcode(postcode)
      .pipe(tap((resp) => (this.addressList = resp.addresses)))
      .subscribe(console.log);
  }
  handleAddressSelect(e) {
    console.log(e.target.value);
    this.addressLookupService
      .getAddressDetails(e.target.value)
      .subscribe(console.log);
  }
  ngOnDestroy() {
    this.formsManager.unsubscribe('customerPersonalDetails');
  }
}
