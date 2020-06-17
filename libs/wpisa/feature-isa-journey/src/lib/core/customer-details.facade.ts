import { Injectable } from '@angular/core';

import {
  ISAApiService,
  GenericLookupResponse,
  GenericLookup,
  CurrentTaxPeriod,
  PersonalDetailsDTO,
  CurrentAddressDTO,
  SearchCustomerDTO,
  MarketingPreferencesDTO,
  NationalityDTO,
} from '@wesleyan-frontend/wpisa/data-access';
import { map, take, filter, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GenericDropdownItem } from './generic-dropdown-item.interface';
import { CustomerDetailsFormValue } from './customer-details-form.interface';
import { AddressDetails } from '@wesleyan-frontend/shared/data-access-api';
import { ManualAddressFormValue } from '../components/manual-address-form/manual-address-form-value.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerDetailsFacade {
  genericLookupsResponse$: Observable<GenericLookupResponse>;
  genericLookups$: Observable<GenericLookup[]>;
  currentTaxPeriod$: Observable<CurrentTaxPeriod>;

  titleList$: Observable<GenericDropdownItem[]>;
  nationalityList$: Observable<GenericDropdownItem[]>;
  marketSegmentList$: Observable<GenericDropdownItem[]>;

  mockFormSubmit = {
    title: '10',
    firstName: 'Alex',
    lastName: 'Cote',
    dob: {
      day: '01',
      month: '01',
      year: '1980',
    },
    profession: 'DENTISTS',
    nationalInsuranceNumber: 'SN 234 234 A',
    nationality: '119',
    addressLookup: {
      postcode: null,
      selectedAddressId: null,
    },
    manualAddress: {
      flatNumber: null,
      houseNumber: '9',
      houseName: null,
      street: 'Middle Street',
      town: 'Rowley',
      region: 'West Midlands',
      county: null,
      postcode: 'B62 9HY',
    },
    personalEmail: 'alex.cotelin@wesleyan.co.uk',
    personalMobileNumber: '07553 770 986',
    marketingEmail: true,
    marketingPost: null,
    marketingPhone: null,
  };

  constructor(private isaApiService: ISAApiService) {
    this.genericLookupsResponse$ = this.isaApiService.getGenericListAndProductData();
    this.genericLookups$ = this.genericLookupsResponse$.pipe(
      map((data) => data.data.genericLookups)
    );
    this.currentTaxPeriod$ = this.genericLookupsResponse$.pipe(
      map((data) => data.data.currentTaxPeriod)
    );

    this.titleList$ = this.genericLookups$.pipe(
      map((lookups) =>
        lookups.find(({ categoryCode }) => categoryCode === 'TITLE')
      ),
      map((lookup) => this.mapMembersToSelectList(lookup))
    );
    this.nationalityList$ = this.genericLookups$.pipe(
      map((lookups) =>
        lookups.find(({ categoryCode }) => categoryCode === 'NATIONALITY')
      ),
      map((lookup) => this.mapMembersToSelectList(lookup))
    );
    this.marketSegmentList$ = this.genericLookups$.pipe(
      map((lookups) =>
        lookups.find(({ categoryCode }) => categoryCode === 'MARKET_SEGMENT')
      ),
      map((lookup) => this.mapMembersToSelectList(lookup))
    );
  }

  submit(value: CustomerDetailsFormValue) {
    const customerDTO = this.mapCustomerFormToSearchCustomerDTO(
      this.mockFormSubmit
    );
    console.log(value);
    this.isaApiService.findCustomer(customerDTO);
  }

  mapCustomerFormToSearchCustomerDTO(
    data: CustomerDetailsFormValue
  ): SearchCustomerDTO {
    return {
      customerDetails: this.mapCustomerDetails(data),
      currentAddress: this.mapCustomerAddress(data),
      nationalityDetails: this.mapCustomerNationality(data),
      marketingPreferences: this.mapCustomerMarketingPreferences(data),
    };
  }

  mapCustomerDetails(value: CustomerDetailsFormValue): PersonalDetailsDTO {
    const mappedData = {
      surname: value.lastName,
      forename: value.firstName,
      emailAddress: value.personalEmail,
      marketSegmentCode: value.profession,
      dateOfBirth: `${value.dob.year}-${value.dob.month}-${value.dob.day}`,
      mobilePhoneNumber: value.personalMobileNumber.replace(/[^0-9]/g, ''),
      niNumber: value.nationalInsuranceNumber.replace(/[^A-Za-z0-9]/g, ''),
      title: null,
    };

    this.titleList$
      .pipe(
        map(
          (list) => list.find((item) => item.value === value.title).description
        ),
        tap((description) => (mappedData['title'] = description)),
        take(1)
      )
      .subscribe();

    return mappedData;
  }

  mapCustomerAddress(value: CustomerDetailsFormValue): CurrentAddressDTO {
    const mappedData = {
      flat: value.manualAddress.flatNumber,
      houseNumber: value.manualAddress.houseNumber,
      houseName: value.manualAddress.houseName,
      street: value.manualAddress.street,
      district: value.manualAddress.region,
      town: value.manualAddress.town,
      county: value.manualAddress.county,
      postcode: value.manualAddress.postcode,
    };

    return mappedData;
  }

  mapCustomerNationality(value: CustomerDetailsFormValue): NationalityDTO {
    const mappedData = { primaryNationality: null };
    this.nationalityList$
      .pipe(
        map(
          (list) =>
            list.find((item) => item.value === value.nationality).description
        ),
        tap((description) => (mappedData.primaryNationality = description)),
        take(1)
      )
      .subscribe();

    return mappedData;
  }

  mapCustomerMarketingPreferences(
    value: CustomerDetailsFormValue
  ): MarketingPreferencesDTO {
    const mappedData = {
      permitForPost: value.marketingPost,
      permitForEmail: value.marketingEmail,
      permitForTelephone: value.marketingPhone,
    };

    return mappedData;
  }

  mapToManualFormAddress(address: AddressDetails): ManualAddressFormValue {
    return {
      postcode: address.postcode,
      town: address.town,
      county: address.county,
      houseNumber: address.buildingNumber,
      houseName: address.buildingName,
      street: address.street,
      flatNumber: address.flat,
      region: address.district,
    };
  }

  private mapMembersToSelectList(
    lookup: GenericLookup
  ): { value: string; description: string }[] {
    return lookup.members.map((member) => ({
      value: member.memberId,
      description: member.customerDescription,
    }));
  }
}
