import { Injectable, OnInit } from '@angular/core';
import { formatCurrency } from '@angular/common';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, filter, shareReplay, tap, take } from 'rxjs/operators';
import { compose, assocPath, replace, over, lensPath, reduce } from 'ramda';

import {
  ISAApiService,
  ConfigService,
  InvestmentOptions,
  Declaration,
} from '@wesleyan-frontend/wpisa/data-access';

import { CustomerDetailsFacade } from './customer-details.facade';
import { NgFormsManager } from '@ngneat/forms-manager';
import { AppForms } from './app-forms.interface';
import { CustomerDetailsFormValue } from './customer-details-form-value.interface';
import { PersonalDetailsViewModel } from './personsal-details-view-model.interface';
import { format } from 'date-fns';
import { ManualAddressFormValue } from '../components/manual-address-form/manual-address-form-value.interface';

@Injectable({
  providedIn: 'root',
})
export class DeclarationFacade implements OnInit {
  private pageContent: Declaration;
  private pageContentSubject$ = new BehaviorSubject<Declaration>(null);
  private personalDetailsViewModelDataSubject$ = new BehaviorSubject<
    PersonalDetailsViewModel
  >(null);

  private customerPersonalDetailsFormValue: CustomerDetailsFormValue;

  pageContent$ = this.pageContentSubject$.asObservable();
  personalDetailsViewModelData$ = this.personalDetailsViewModelDataSubject$.asObservable();

  constructor(
    private isaApiService: ISAApiService,
    private configService: ConfigService,
    private customerDetailsFacade: CustomerDetailsFacade,
    private formManager: NgFormsManager<AppForms>
  ) {
    this.pageContent = this.configService.content.declaration;
    this.pageContentSubject$.next(this.pageContent);
    this.customerPersonalDetailsFormValue = this.formManager.getControl(
      'customerPersonalDetails'
    ).value;

    this.personalDetailsViewModelDataSubject$.next(
      this.mapPersonalDetailsFormValuesToViewModel(
        this.customerPersonalDetailsFormValue
      )
    );
  }

  ngOnInit() {}
  mapPersonalDetailsFormValuesToViewModel(
    formValue: CustomerDetailsFormValue
  ): PersonalDetailsViewModel {
    const {
      title: titleId,
      firstName,
      lastName,
      dob,
      nationality: nationalityId,
      personalEmail,
      profession: professionId,
      personalMobileNumber,
      manualAddress,
    } = formValue;

    const data = {
      name: {
        label: 'Name',
        value: `${titleId} ${firstName} ${lastName}`,
      },
      dob: {
        label: 'Date of birth',
        value: format(
          new Date(
            parseInt(dob.year),
            parseInt(dob.month) - 1, // starts with 0 - January
            parseInt(dob.day)
          ),

          'dd/MM/yyyy'
        ),
      },
      profession: { label: 'Profession', value: professionId },
      nationality: { label: 'Nationality', value: nationalityId },
      emailAddress: { label: 'Email address', value: personalEmail },
      phoneNumber: {
        label: 'Phone number',
        value: personalMobileNumber.replace(/[^0-9]/g, ''),
      },
      homeAddress: {
        label: 'Home address',
        value: this.transformAddress(manualAddress),
      },
    };

    this.customerDetailsFacade
      .getTitleById$(titleId)
      .pipe(
        tap((title) => (data.name.value = `${title} ${firstName} ${lastName}`)),
        take(1)
      )
      .subscribe();

    this.customerDetailsFacade
      .getProfessionById$(professionId)
      .pipe(
        tap((profession) => (data.profession.value = profession)),
        take(1)
      )
      .subscribe();

    this.customerDetailsFacade
      .getNationalityById$(nationalityId)
      .pipe(
        tap((nationality) => (data.nationality.value = nationality)),
        take(1)
      )
      .subscribe();

    return data;
  }

  transformAddress(address: ManualAddressFormValue, delimiter = ', '): string {
    if (!address) {
      return '';
    }

    const fields: { fieldName: string; delimited: boolean }[] = [
      { fieldName: 'flatNumber', delimited: false },
      { fieldName: 'houseNumber', delimited: false },
      { fieldName: 'houseName', delimited: true },
      { fieldName: 'street', delimited: true },
      { fieldName: 'town', delimited: true },
      { fieldName: 'region', delimited: true },
      { fieldName: 'county', delimited: true },
      { fieldName: 'postcode', delimited: true },
    ];

    let result = fields.reduce((accumulator, field) => {
      const value = address[field.fieldName];

      return value
        ? `${accumulator}${value}${field.delimited ? delimiter : ' '}`
        : accumulator;
    }, '');

    result = result.substr(0, result.length - delimiter.length);

    return result;
  }
}
