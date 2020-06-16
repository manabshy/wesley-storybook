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

  private mapMembersToSelectList(
    lookup: GenericLookup
  ): { value: string; description: string }[] {
    return lookup.members.map((member) => ({
      value: member.memberId,
      description: member.customerDescription,
    }));
  }
}
