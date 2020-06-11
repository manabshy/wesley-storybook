import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import {
  KnowledgeCheckAnswerDTO,
  KnowledgeCheckResponse,
} from './knowledge-check.interface';
import { GenericLookupsResponse } from './generic-lists-product.interface';

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

  getGenericListAndProductData(): Observable<GenericLookupsResponse> {
    return of({
      genericLookups: {
        title: [{ id: '10', description: 'Dr' }],
        nationality: [{ id: '92', description: 'British' }],
        marketSegment: [
          { id: 'GENMEDPRAC', description: 'General Medical Practitioner' },
        ],
      },
      currentTaxPeriod: {
        taxPeriodCode: '2020-2021',
        taxPeriodDescription: '2020 to 2021',
        startDateTime: '2020-04-06T00:00:00.000Z',
        endDateTime: '2021-04-05T23:59:59.000Z',
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
    });
  }
}
