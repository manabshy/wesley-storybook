import { Injectable } from '@angular/core';
import { map, take, filter, tap, switchMap } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

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
  CurrentTaxPeriodISALimits,
  CategoryCode,
} from '@wesleyan-frontend/wpisa/data-access';
import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';
import { AddressDetails } from '@wesleyan-frontend/shared/data-access-api';

import { GenericDropdownItem } from './generic-dropdown-item.interface';
import { CustomerDetailsFormValue } from './customer-details-form-value.interface';
import { ManualAddressFormValue } from '../components/manual-address-form/manual-address-form-value.interface';
import { AppStateFacade } from './app-state-facade';

@Injectable({
  providedIn: 'root',
})
export class CustomerDetailsFacade {
  private submitSubject$ = new BehaviorSubject<boolean>(false);
  private currentTaxPeriodISALimitsSubject$ = new BehaviorSubject<CurrentTaxPeriodISALimits | null>(
    null
  );

  genericLookupsResponse$: Observable<GenericLookupResponse>;
  genericLookups$: Observable<GenericLookup[]>;

  titleList$: Observable<GenericDropdownItem[]>;
  nationalityList$: Observable<GenericDropdownItem[]>;
  marketSegmentList$: Observable<GenericDropdownItem[]>;

  submitSuccessful$: Observable<boolean> = this.submitSubject$.asObservable();
  currentTaxPeriodISALimits$: Observable<
    CurrentTaxPeriodISALimits
  > = this.currentTaxPeriodISALimitsSubject$.asObservable();

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

  constructor(
    private isaApiService: ISAApiService,
    private appStateFacade: AppStateFacade,
    private loadingService: OverlayProgressSpinnerService
  ) {
    this.genericLookupsResponse$ = this.isaApiService.getGenericListAndProductData();
    this.genericLookups$ = this.genericLookupsResponse$.pipe(
      map((data) => data.data.genericLookups)
    );

    this.titleList$ = this.genericLookups$.pipe(
      map((lookups) =>
        lookups.find(({ categoryCode }) => categoryCode === CategoryCode.TITLE)
      ),
      map((lookup) => this.mapMembersToSelectList(lookup))
    );
    this.nationalityList$ = this.genericLookups$.pipe(
      map((lookups) =>
        lookups.find(
          ({ categoryCode }) => categoryCode === CategoryCode.NATIONALITY
        )
      ),
      map((lookup) => this.mapMembersToSelectList(lookup))
    );
    this.marketSegmentList$ = this.genericLookups$.pipe(
      map((lookups) =>
        lookups.find(
          ({ categoryCode }) => categoryCode === CategoryCode.MARKET_SEGMENT
        )
      ),
      map((lookup) => this.mapMembersToSelectList(lookup))
    );

    this.saveCurrentTaxPeriodToAppState();

    this.rehydrateCurrentTaxPeriodFromAppState();
  }

  submit(value: CustomerDetailsFormValue) {
    const customerDTO = this.mapCustomerFormToSearchCustomerDTO(value);
    this.loadingService.show();

    this.appStateFacade
      .saveFormState([
        'customerPersonalDetails',
        'addressLookup',
        'manualAddress',
      ])
      .pipe(take(1))
      .subscribe();

    this.isaApiService
      .findCustomer(customerDTO)
      .pipe(
        tap((resp) =>
          this.currentTaxPeriodISALimitsSubject$.next(
            resp.data.currentTaxPeriod
          )
        ),
        tap((_) => this.submitSubject$.next(true)),
        tap((_) => this.loadingService.hide()),
        take(1)
      )
      .subscribe();
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

  getNationalityById$(id: string) {
    return this.nationalityList$.pipe(
      map((list) => list.find((item) => item.value === id).description)
    );
  }

  getTitleById$(id: string) {
    return this.titleList$.pipe(
      map((list) => list.find((item) => item.value === id).description)
    );
  }

  getProfessionById$(id: string) {
    return this.marketSegmentList$.pipe(
      map((list) => list.find((item) => item.value === id).description)
    );
  }

  private rehydrateCurrentTaxPeriodFromAppState() {
    if (this.appStateFacade.state.currentTaxPeriod) {
      this.currentTaxPeriodISALimitsSubject$.next(
        this.appStateFacade.state.currentTaxPeriod
      );
    }
  }

  private saveCurrentTaxPeriodToAppState() {
    this.currentTaxPeriodISALimits$
      .pipe(
        filter((data) => !!data),
        switchMap((currentTaxPeriod) =>
          this.appStateFacade.save({ currentTaxPeriod })
        )
      )
      .subscribe();
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
