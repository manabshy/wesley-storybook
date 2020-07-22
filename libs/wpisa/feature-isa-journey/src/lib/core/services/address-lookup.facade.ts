import { Observable, BehaviorSubject } from 'rxjs';
import { tap, concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import {
  AddressLookupService,
  PostcodeLookupAddress,
} from '@wesleyan-frontend/shared/data-access-api';

import { AppStateFacade } from './app-state-facade';

@Injectable({
  providedIn: 'root',
})
export class AddressLookupFacade {
  private addressListSubject$ = new BehaviorSubject<PostcodeLookupAddress[]>(
    []
  );
  addressList$: Observable<
    PostcodeLookupAddress[]
  > = this.addressListSubject$.asObservable();

  constructor(
    private addressLookupService: AddressLookupService,
    private appState: AppStateFacade
  ) {
    if (this.appState.state?.postcodeLookupAddressList) {
      this.addressListSubject$.next(
        this.appState.state.postcodeLookupAddressList
      );
    }

    this.addressList$
      .pipe(
        concatMap((addresses) =>
          this.appState.save({ postcodeLookupAddressList: addresses })
        )
      )
      .subscribe();
  }

  getAddressDetails(id: string) {
    return this.addressLookupService.getAddressDetails(id);
  }

  findByPostcode(postcode: string) {
    return this.addressLookupService.findByPostcode(postcode).pipe(
      tap((response) =>
        response?.addresses
          ? this.addressListSubject$.next(response.addresses)
          : this.addressListSubject$.next([])
      ),
      tap((response) =>
        response?.addresses
          ? this.appState.save({
              postcodeLookupAddressList: response.addresses,
            })
          : this.appState.save({ postcodeLookupAddressList: [] })
      )
    );
  }

  reset() {
    this.addressListSubject$.next([]);
  }
}
