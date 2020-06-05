import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  PostcodeLookupAddress,
  PostcodeLookupResponse,
  AddressDetails,
} from './address-lookup.interface';

@Injectable({
  providedIn: 'root',
})
export class AddressLookupService {
  constructor(private http: HttpClient) {}

  findByPostcode(postcode: string): Observable<PostcodeLookupAddress[]> {
    return this.http
      .get<PostcodeLookupResponse>(
        `https://apim-dev-digital-wes.azure-api.net/lookups/1.0/postcodeSearch?postcode=${postcode}`
      )
      .pipe(map((response) => response.addresses));
  }

  getAddressDetails(id: string) {
    return this.http.get<AddressDetails>(
      `https://apim-dev-digital-wes.azure-api.net/lookups/1.0/addressDetail?moniker=${id}`
    );
  }
}
