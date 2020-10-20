import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FindConsultantResponse } from './find-fc-api.interface';

@Injectable({
  providedIn: 'root',
})
export class FindFCApiService {
  constructor(private http: HttpClient) {}

  findByFCDetails(
    postcode: string,
    segment: string
  ): Observable<FindConsultantResponse> {
    return this.http.post<FindConsultantResponse>(
      `/api/findmyfcwebapiwrapper/newcustomersearch`,
      { segment, postcode }
    );
  }

  findByCustomerID(customerId: string): Observable<FindConsultantResponse> {
    return this.http.get<FindConsultantResponse>(
      `/api/findmyfcwebapiwrapper/existingcustomersearch?id=${customerId}`
    );
  }

  /**
   *
   * @param dateOfBirth in yyyy-mm-dd format ie. 1950-15-01
   * @param emailAddress
   * @param postcode
   */
  findByCustomerDetails(
    dateOfBirth: string,
    emailAddress: string,
    postcode: string
  ): Observable<FindConsultantResponse> {
    return this.http.post<FindConsultantResponse>(
      `/api/findmyfcwebapiwrapper/existingcustomersearch`,
      { dateOfBirth, postcode, emailAddress }
    );
  }
}
