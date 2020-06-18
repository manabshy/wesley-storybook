import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

import {
  KnowledgeCheckAnswerDTO,
  KnowledgeCheckResponse,
} from './knowledge-check.interface';
import { GenericLookupResponse } from './generic-lists-product.interface';
import {
  SearchCustomerDTO,
  CustomerSearchResponse,
} from './customer-details.interface';

@Injectable({
  providedIn: 'root',
})
export class ISAApiService {
  constructor(private http: HttpClient) {}

  submitInitialAnswer(
    answer: Omit<KnowledgeCheckAnswerDTO, 'attemptId'>
  ): Observable<KnowledgeCheckResponse> {
    return this.http.post<KnowledgeCheckResponse>(
      `/api/isawebapiwrapper/knowledgecheckstepinitial`,
      answer,
      {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        ),
      }
    );
  }

  submitSubsequentAnswer(
    answer: KnowledgeCheckAnswerDTO
  ): Observable<KnowledgeCheckResponse> {
    return this.http.put<KnowledgeCheckResponse>(
      `/api/isawebapiwrapper/knowledgecheckstepsubsequent`,
      answer
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

    return this.http
      .post<GenericLookupResponse>(`/api/isawebapiwrapper/genericlookup`, {})
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }

  findCustomer(data: SearchCustomerDTO): Observable<CustomerSearchResponse> {
    const mock = {
      data: {
        customerSearch: {
          customerSearchStatus: 'NO_MATCH',
          customerId: 123456,
        },
        productSearch: {
          productSearchStatus: 'NOT_FOUND',
          policyNumber: 'ABC1234567',
        },
        currentTaxPeriod: {
          taxPeriodCode: '2020-2021',
          taxPeriodDescription: '2020 to 2021',
          startDateTime: '2020-04-06T00:00:00.000Z',
          endDateTime: '2021-04-05T23:59:59.000',
          lumpSumAccepted: true,
          monthlyPaymentsAccepted: true,
          newISAsAccepted: true,
          topUpsAccepted: true,
          totalAnnualAllowance: 20000,
          minNewLumpSumAmount: 2000,
          minTopUpLumpSumAmount: 1000,
          maxLumpSumAmount: 20000,
          minNewMonthlyAmount: 250,
          minTopUpMonthlyAmount: 25,
          maxMonthlyAmount: 1666.66,
          numberOfMonthlyPayments: 11,
        },
      },
    };

    return this.http.post<CustomerSearchResponse>(
      '/api/isawebapiwrapper/customersearch',
      data
    );
  }
}
