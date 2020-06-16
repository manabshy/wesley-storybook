import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

import {
  KnowledgeCheckAnswerDTO,
  KnowledgeCheckResponse,
} from './knowledge-check.interface';
import { GenericLookupResponse } from './generic-lists-product.interface';
import { SearchCustomerDTO } from './customer-details.interface';

@Injectable({
  providedIn: 'root',
})
export class ISAApiService {
  constructor(private http: HttpClient) {}

  submitAnswer(
    answer: KnowledgeCheckAnswerDTO
  ): Observable<KnowledgeCheckResponse> {
    return this.http.post<KnowledgeCheckResponse>(
      `/api/isawebapiwrapper/knowledgecheck`,
      answer,
      {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        ),
      }
    );
  }

  getGenericListAndProductData(): Observable<GenericLookupResponse> {
    const mock = {
      data: {
        genericLookups: [
          {
            categoryCode: 'TITLE',
            members: [
              { memberId: '10', customerDescription: 'Dr' },
              { memberId: '8', customerDescription: 'Miss' },
              { memberId: '5', customerDescription: 'Mr' },
              { memberId: '6', customerDescription: 'Mrs' },
              { memberId: '68', customerDescription: 'Ms' },
            ],
          },
          {
            categoryCode: 'NATIONALITY',
            members: [
              { memberId: '92', customerDescription: 'British' },
              { memberId: '95', customerDescription: 'American' },
              { memberId: '159', customerDescription: 'Australian' },
              { memberId: '113', customerDescription: 'Dutch' },
              { memberId: '119', customerDescription: 'French' },
              { memberId: '121', customerDescription: 'German' },
            ],
          },
          {
            categoryCode: 'MARKET_SEGMENT',
            members: [
              { memberId: 'DENTISTS', customerDescription: 'Dentist' },
              {
                memberId: 'GENMEDPRAC',
                customerDescription: 'General Medical Practitioner',
              },
              { memberId: 'HOSDOCS', customerDescription: 'Hospital Doctor' },
              { memberId: 'OTHER', customerDescription: 'Other' },
              { memberId: 'TEACHERS', customerDescription: 'Teacher' },
            ],
          },
        ],
        currentTaxPeriod: {
          taxPeriodCode: '2020-2021',
          taxPeriodDescription: '2020 to 2021',
          startDateTime: '2020-04-06T01:00:00+01:00',
          endDateTime: '2021-04-06T00:59:59+01:00',
          lumpSumAccepted: true,
          monthlyPaymentsAccepted: true,
          newISAsAccepted: true,
          topUpsAccepted: true,
          totalAnnualAllowance: 20000,
          minNewLumpSumAmount: 2000,
          minTopUpLumpSumAmount: 1000,
          minNewMonthlyAmount: 250,
          minTopUpMonthlyAmount: 25,
          numberOfMonthlyPayments: 11,
        },
      },
    };
    return of(mock);

    return this.http
      .get<GenericLookupResponse>(`/api/isawebapiwrapper/genericlookup`)
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }

  findCustomer(data: SearchCustomerDTO) {
    const mock = {
      customerDetails: {
        title: 'Professor',
        forename: 'Michael William',
        surname: 'Harrington-Smythe',
        dateOfBirth: '1963-07-06',
        mobilePhoneNumber: '01216005266',
        niNumber: 'AB112233Z',
        emailAddress: 'steven.price@griffiths-waite.co.uk',
        marketSegmentCode: 'HOSDOCS',
      },
      currentAddress: {
        flat: 'Flat 4A',
        houseName: 'Ivory Towers',
        street: 'Great Chiswick Street',
        district: 'Wimbledon',
        town: 'London',
        county: 'Down South',
        postcode: 'SW18 9PP',
        countryCode: 'UK',
        countryName: 'United Kingdom',
      },
      nationalityDetails: {
        primaryNationality: 'English',
      },
      customerPermissionGranted: true,
      marketingPreferences: {
        permitForPost: true,
        permitForTelephone: true,
        permitForEmail: true,
      },
    };
    this.http.post('`/api/isawebapiwrapper/customersearch`', data);
  }
}
