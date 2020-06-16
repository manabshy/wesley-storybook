import { Injectable } from '@angular/core';

import {
  ISAApiService,
  GenericLookupResponse,
  GenericLookup,
  CurrentTaxPeriod,
} from '@wesleyan-frontend/wpisa/data-access';
import { map, take, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GenericDropdownItem } from './generic-dropdown-item.interface';

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

  submit(value: any) {
    const mockFormSubmit = {
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
    console.log(value);
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
