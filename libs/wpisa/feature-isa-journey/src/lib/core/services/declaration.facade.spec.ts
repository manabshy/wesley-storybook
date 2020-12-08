import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Overlay } from '@angular/cdk/overlay';
import { of, throwError } from 'rxjs';

import {
  SearchCustomerDTO,
  ISAApiService,
  ConfigService,
} from '@wesleyan-frontend/wpisa/data-access';
import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';
import {
  mockConfig,
  mockGenericLookups,
} from '@wesleyan-frontend/wpisa/data-access';
import { NgFormsManager } from '@ngneat/forms-manager';

import { CustomerDetailsFacade } from './customer-details.facade';
import { DeclarationFacade } from './declaration.facade';
import { AppStateFacade } from './app-state-facade';
import { KnowledgeCheckFacade } from './knowledge-check.facade';
import { mockAppStateFormCompleted } from '@wesleyan-frontend/wpisa/data-access';
import { AppState } from '../models/app-state.interface';
import { InvestmentOptionPaymentType } from '../models/investment-option-form-value.interface';
import { HttpErrorResponse } from '@angular/common/http';

describe('DeclarationFacade', () => {
  let declarationFacade: DeclarationFacade;
  let customerDetailsFacade: CustomerDetailsFacade;
  let appStateFacade: AppStateFacade;
  let isaApiService: ISAApiService;

  const mockCustomerDetailsFormSubmit = {
    title: mockConfig.titleList[1].value,
    firstName: 'Alex',
    lastName: 'Cote',
    dob: {
      day: '01',
      month: '02',
      year: '1980',
    },
    profession: '126',
    nationalInsuranceNumber: 'SN 234 234 A',
    nationality: '119',
    addressLookup: {
      postcode: null,
      selectedAddressId: null,
    },
    manualAddress: {
      flatNumber: null,
      houseNumber: '9',
      houseName: null,
      street: 'Middle Street',
      town: 'Rowley',
      region: 'West Midlands',
      county: null,
      postcode: 'B62 9HY',
    },
    personalEmail: 'alex.cotelin@wesleyan.co.uk',
    personalMobileNumber: '07553 770 986',
    marketingEmail: true,
    marketingPost: null,
    marketingPhone: null,
  };

  const expected: SearchCustomerDTO = {
    customerDetails: {
      title: 'Mrs',
      forename: 'Alex',
      surname: 'Cote',
      dateOfBirth: '1980-02-01',
      mobilePhoneNumber: '07553770986',
      niNumber: 'SN234234A',
      emailAddress: 'alex.cotelin@wesleyan.co.uk',
      marketSegmentCode: 'DENTISTS',
    },
    currentAddress: {
      flat: null,
      houseName: null,
      houseNumber: '9',
      street: 'Middle Street',
      town: 'Rowley',
      district: 'West Midlands',
      county: null,
      postcode: 'B62 9HY',
    },
    nationalityDetails: {
      primaryNationality: 'French',
    },
    marketingPreferences: {
      permitForPost: null,
      permitForTelephone: null,
      permitForEmail: true,
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CustomerDetailsFacade,
        KnowledgeCheckFacade,
        OverlayProgressSpinnerService,
        Overlay,
        NgFormsManager,
        // AppStateFacade,
        {
          provide: ConfigService,
          useValue: { content: mockConfig },
        },
        {
          provide: ISAApiService,
          useValue: {
            getGenericListAndProductData: () => of(mockGenericLookups),
            getTransactionId: jest.fn(),
            getPaymentUrl: jest.fn(),
          },
        },
        {
          provide: AppStateFacade,
          useValue: {
            state: mockAppStateFormCompleted,
          },
        },
      ],
    });

    customerDetailsFacade = TestBed.inject(CustomerDetailsFacade);
    declarationFacade = TestBed.inject(DeclarationFacade);
    appStateFacade = TestBed.inject(AppStateFacade);
    isaApiService = TestBed.inject(ISAApiService);
  });

  it('should be created', () => {
    expect(declarationFacade).toBeTruthy();
  });

  describe('submitLumpSumAndMonthlyISA', () => {
    it('should get a transaction ID', () => {
      jest
        .spyOn(isaApiService, 'getTransactionId')
        .mockReturnValue(of({ data: { transactionId: 'WIP77221' } }));

      declarationFacade.submitLumpSumAndMonthlyISA().subscribe();

      expect(isaApiService.getTransactionId).toHaveBeenCalled();
    });

    it('should get a payment url for iframe', () => {
      jest
        .spyOn(isaApiService, 'getTransactionId')
        .mockReturnValue(of({ data: { transactionId: 'WIP77221' } }));
      jest
        .spyOn(isaApiService, 'getPaymentUrl')
        .mockReturnValue(of({ paymentUrl: 'https://sagepay' }));

      declarationFacade.submitLumpSumAndMonthlyISA().subscribe();

      expect(isaApiService.getTransactionId).toHaveBeenCalled();
      expect(isaApiService.getPaymentUrl).toHaveBeenCalled();
    });

    it('should redirect to confirmation error page if ', () => {
      jest
        .spyOn(isaApiService, 'getTransactionId')
        .mockImplementation(() =>
          throwError(new HttpErrorResponse({ status: 400 }))
        );
      spyOn(window, 'open').and.callFake(() => jest.fn());

      declarationFacade.submitLumpSumAndMonthlyISA().subscribe((res) => {});

      expect(window.open).toHaveBeenCalledWith(
        '/savings-and-investments/with-profits-isa/confirmation-error',
        '_self'
      );
    });
  });

  describe('getLumpSumAndMonthlyTransactionDTO', () => {
    it('should map to lumpSumAndMonthly transaction dto', () => {
      const result = declarationFacade.getLumpSumAndMonthlyTransactionDTO(
        'WIP77221'
      );

      expect(result).toMatchSnapshot();
    });
  });
});
