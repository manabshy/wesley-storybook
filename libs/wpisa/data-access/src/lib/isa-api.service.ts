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
import {
  SubmitTransactionDTO,
  GetTransactionIdResponse,
} from './transaction.interface';

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
      answer
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

  getTransactionId(): Observable<GetTransactionIdResponse> {
    return this.http.post<GetTransactionIdResponse>(
      '/api/isawebapiwrapper/gettransaction',
      {}
    );
  }

  submitTransaction(
    transaction: Partial<SubmitTransactionDTO>
  ): Observable<{}> {
    return this.http.put<{}>('/api/isawebapiwrapper/transaction', transaction);
  }

  getPaymentUrl(
    transaction: Partial<SubmitTransactionDTO>
  ): Observable<{ paymentUrl: string }> {
    return this.http.post<{ paymentUrl: string }>(
      '/api/isawebapiwrapper/getpaymenturl',
      transaction
    );
  }
}
