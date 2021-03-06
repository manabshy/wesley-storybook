import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { isEmpty } from 'ramda';
import { tap } from 'rxjs/operators';

const mockFormsStateString = JSON.stringify({
  attemptId: 618,
  forms: {
    knowledgeCheckQ1: {
      question1: 'Yes',
    },
    knowledgeCheckQ2: {
      question2: 'Yes',
    },
    customerPersonalDetails: {
      title: 'c2044dac-a1eb-48c8-b23c-5255bac96bc0',
      firstName: 'Alex',
      lastName: 'Cote',
      dob: {
        day: '01',
        month: '02',
        year: '1980',
      },
      profession: '1237',
      nationalInsuranceNumber: 'SN 234 234 A',
      nationality: '92',
      addressLookup: {
        postcode: 'a100',
        selectedAddressId:
          '0wOGBRFAPkBwAAAAABAwEAAAABVdv0QAAAAAAAUAAAAAD.....AAAAAAAAAAAA',
      },
      manualAddress: {
        flatNumber: 'Flat',
        houseNumber: null,
        houseName: 'A10',
        street: 'Kenilworth Court, Hagley Road',
        town: 'BIRMINGHAM',
        region: null,
        county: null,
        postcode: 'B16 9NS',
      },
      personalEmail: 'alex.cotelin@wesleyan.co.uk',
      personalMobileNumber: '07553 770 986',
      marketingEmail: null,
      marketingPost: true,
      marketingPhone: null,
    },
    addressLookup: {
      postcode: 'a100',
      selectedAddressId:
        '0wOGBRFAPkBwAAAAABAwEAAAABVdv0QAAAAAAAUAAAAAD.....AAAAAAAAAAAA',
    },
    manualAddress: {
      flatNumber: 'Flat',
      houseNumber: null,
      houseName: 'A10',
      street: 'Kenilworth Court, Hagley Road',
      town: 'BIRMINGHAM',
      region: null,
      county: null,
      postcode: 'B16 9NS',
    },
    investmentOptions: {
      investmentOption: 'LUMP_SUM',
    },
    monthlyPayment: {
      amount: '300.55',
      directDebit: {
        accountHolderFullName: 'James Bond',
        sortCode: { c1: '12', c2: '00', c3: '33' },
        accountNumber: '12312312',
        bankName: 'RBS',
      },
    },
    lumpSumAndMonthly: {
      totalAmount: {
        lumpSumAmount: '10000.55',
        monthlyAmount: '300.67',
      },
      directDebit: {
        accountHolderFullName: 'James Bond',
        sortCode: { c1: '12', c2: '00', c3: '33' },
        accountNumber: '12312312',
        bankName: 'RBS',
      },
    },
    lumpSumPayment: {
      amount: '3000.55',
    },
  },
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
    maxLumpSumAmount: 20000,
    maxMonthlyAmount: 1666.66,
  },
});

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  private appState$$ = new BehaviorSubject<string>('{}');
  //We need this for the route guard
  //https://github.com/angular/angular/issues/14615
  private loaded$$ = new BehaviorSubject<boolean>(false);

  appState$ = this.appState$$.pipe();
  loaded$ = this.loaded$$.pipe();

  constructor(private http: HttpClient) {}

  save(state: string): Observable<{}> {
    const data = {
      state: typeof state === 'string' ? state : JSON.stringify(state),
    };

    return this.http
      .post<{}>(`/api/isawebapiwrapper/appstate`, data)
      .pipe(tap((_) => this.appState$$.next(data.state)));
  }

  private get() {
    return this.http.get<{ state: string }>(`/api/isawebapiwrapper/appstate`);
  }

  loadAppState() {
    return this.get()
      .toPromise()
      .then((data) => {
        this.appState$$.next(isEmpty(data.state) ? '{}' : data.state);
        this.loaded$$.next(true);
      });
  }

  //Clear backend session and app state
  clear() {
    return this.http.get<{ state: string }>(`/api/isawebapiwrapper/cleardata`);
  }
}
