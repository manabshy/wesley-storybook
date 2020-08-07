import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Overlay } from '@angular/cdk/overlay';
import { of } from 'rxjs';

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

import { CustomerDetailsFacade } from './customer-details.facade';
import { AppStateFacade } from './app-state-facade';

describe('CustomerDetailsFacade', () => {
  let customerDetailsFacade: CustomerDetailsFacade;
  const mockCustomerDetailsFormSubmit = {
    title: mockConfig.titleList[1].value,
    firstName: 'Alex',
    lastName: 'Cote',
    dob: {
      day: '01',
      month: '02',
      year: '1980',
    },
    profession: 'DENTISTS',
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
        AppStateFacade,
        OverlayProgressSpinnerService,
        Overlay,
        {
          provide: ConfigService,
          useValue: { content: mockConfig },
        },
        {
          provide: ISAApiService,
          useValue: {
            getGenericListAndProductData: () => of(mockGenericLookups),
          },
        },
      ],
    });

    customerDetailsFacade = TestBed.inject(CustomerDetailsFacade);
  });

  it('should be created', () => {
    expect(customerDetailsFacade).toBeTruthy();
  });

  describe('mapCustomerFormToSearchCustomerDTO', () => {
    it('should map customer form values to SearchCustomerDTO', () => {
      const result = customerDetailsFacade.mapCustomerFormToSearchCustomerDTO(
        mockCustomerDetailsFormSubmit
      );

      expect(result).toEqual(expected);
    });
  });

  //   describe('mapCustomerDetails', () => {
  //     it('should map customer form values to customer details search DTO', () => {
  //       const result = service.mapCustomerDetails(mockCustomerDetailsFormSubmit);

  //       expect(result).toEqual(expected.customerDetails);
  //     });
  //   });

  //   describe('mapCustomerAddress', () => {
  //     it('should map customer form values to CurrentAddressDTO', () => {
  //       const result = service.mapCustomerAddress(mockCustomerDetailsFormSubmit);

  //       expect(result).toEqual(expected.currentAddress);
  //     });
  //   });

  //   describe('mapCustomerMarketingPreferences', () => {
  //     it('should map customer form values to MarketingPreferencesDTO', () => {
  //       const result = service.mapCustomerMarketingPreferences(
  //         mockCustomerDetailsFormSubmit
  //       );

  //       expect(result).toEqual(expected.marketingPreferences);
  //     });
  //   });

  //   describe('mapCustomerNationality', () => {
  //     it('should map customer form values to NationalityDTO', () => {
  //       const result = service.mapCustomerNationality(
  //         mockCustomerDetailsFormSubmit
  //       );

  //       expect(result).toEqual(expected.nationalityDetails);
  //     });
  //   });
});
