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

  findByPostcode(postcode: string) {
    return this.http.get<PostcodeLookupResponse | null>(
      `/api/lookup/search?postcode=${postcode}`
    );
  }

  getAddressDetails(id: string) {
    return this.http.get<AddressDetails | null>(
      `/api/lookup/select?moniker=${id}&format=experian`
    );
  }
}
