import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FindFCApiService {
  constructor(private http: HttpClient) {}

  findByFCDetails(postcode: string, segment: string): Observable<any> {
    return of({});
    // return this.http.post<KnowledgeCheckResponse>(
    //   `/api/isawebapiwrapper/knowledgecheckstepinitial`,
    //   answer
    // );
  }

  findByCustomerID(customerId: string): Observable<any> {
    // return of({});
    return throwError(new HttpErrorResponse({ status: 404 }));
    // return this.http.post<KnowledgeCheckResponse>(
    //   `/api/isawebapiwrapper/knowledgecheckstepinitial`,
    //   answer
    // );
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
  ): Observable<any> {
    return of({});
    // return this.http.post<KnowledgeCheckResponse>(
    //   `/api/isawebapiwrapper/knowledgecheckstepinitial`,
    //   answer
    // );
  }
}
