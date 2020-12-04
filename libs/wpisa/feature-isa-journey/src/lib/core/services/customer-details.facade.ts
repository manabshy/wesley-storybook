import { Injectable } from '@angular/core';
import {
  map,
  take,
  tap,
  finalize,
  concatMapTo,
  concatMap,
} from 'rxjs/operators';
import { Observable, BehaviorSubject, of, timer } from 'rxjs';

import {
  ISAApiService,
  GenericLookupResponse,
  GenericLookup,
  PersonalDetailsDTO,
  CurrentAddressDTO,
  SearchCustomerDTO,
  MarketingPreferencesDTO,
  NationalityDTO,
  CurrentTaxPeriodISALimits,
  CategoryCode,
  ConfigService,
} from '@wesleyan-frontend/wpisa/data-access';
import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';
import { AddressDetails } from '@wesleyan-frontend/shared/data-access-api';

import { GenericDropdownItem } from '../models/generic-dropdown-item.interface';
import { CustomerDetailsFormValue } from '../models/customer-details-form-value.interface';
import { ManualAddressFormValue } from '../../components/manual-address-form/manual-address-form-value.interface';
import { AppStateFacade } from './app-state-facade';
import { NgFormsManager } from '@ngneat/forms-manager';
import { AppForms } from '../models/app-forms.interface';

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

  constructor(
    private isaApiService: ISAApiService,
    private appStateFacade: AppStateFacade,
    private loadingService: OverlayProgressSpinnerService,
    private configService: ConfigService,
    private formManager: NgFormsManager<AppForms>
  ) {
    this.genericLookupsResponse$ = this.isaApiService.getGenericListAndProductData();
    this.genericLookups$ = this.genericLookupsResponse$.pipe(
      map((data) => data.data.genericLookups)
    );

    this.titleList$ = of(
      this.configService.content.titleList.map(({ value, label }) => ({
        value,
        description: label,
      }))
    );

    this.nationalityList$ = this.genericLookups$.pipe(
      map((lookups) =>
        lookups.find(
          ({ categoryCode }) => categoryCode === CategoryCode.NATIONALITY
        )
      ),
      map((lookup) => this.mapMembersToSelectList(lookup))
    );

    this.marketSegmentList$ = of(
      this.configService.content.marketSegmentList.map(({ key, label }) => ({
        value: key,
        description: label,
      }))
    );

    this.rehydrateCurrentTaxPeriodFromAppState();
  }

  submit(value: CustomerDetailsFormValue) {
    const customerDTO = this.mapCustomerFormToSearchCustomerDTO(value);
    this.loadingService.show();

    return this.appStateFacade
      .save({
        forms: {
          customerPersonalDetails: value,
          addressLookup: this.formManager.getControl('addressLookup')?.value,
          manualAddress: this.formManager.getControl('manualAddress')?.value,
        },
      })
      .pipe(
        concatMapTo(
          this.isaApiService.findCustomer(customerDTO).pipe(
            tap((resp) =>
              this.currentTaxPeriodISALimitsSubject$.next(
                resp.data.currentTaxPeriod
              )
            ),
            concatMap((resp) =>
              this.appStateFacade.save({
                currentTaxPeriod: resp.data.currentTaxPeriod,
              })
            ),
            tap((_) => this.submitSubject$.next(true)),
            finalize(() => this.loadingService.hide())
          )
        )
      );
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
      marketSegmentCode: this.getSegmentValueByKey(value.profession),
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

  getSegmentValueByKey(key: string): string {
    return this.configService.content.marketSegmentList
      .filter((v) => v.key === key)
      .map((v) => v.value)[0];
  }

  private rehydrateCurrentTaxPeriodFromAppState() {
    if (this.appStateFacade.state.currentTaxPeriod) {
      this.currentTaxPeriodISALimitsSubject$.next(
        this.appStateFacade.state.currentTaxPeriod
      );
    }
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
