export interface SearchCustomerDTO {
  customerDetails: PersonalDetailsDTO;
  currentAddress: CurrentAddressDTO;
  nationalityDetails?: NationalityDTO;
  marketingPreferences: MarketingPreferencesDTO;
}

export interface CurrentAddressDTO {
  flat?: string;
  houseName: string;
  houseNumber: string;
  street: string;
  district: string;
  town: string;
  county: string;
  postcode: string;
  countryCode?: string;
  countryName?: string;
}

export interface PersonalDetailsDTO {
  title: string;
  forename: string;
  surname: string;
  dateOfBirth: string;
  mobilePhoneNumber: string;
  niNumber: string;
  emailAddress: string;
  marketSegmentCode: string;
}

export interface MarketingPreferencesDTO {
  permitForPost: null | boolean;
  permitForTelephone: null | boolean;
  permitForEmail: null | boolean;
}

export interface NationalityDTO {
  primaryNationality: string;
}

export interface CustomerSearchResponse {
  data: {
    customerSearch: {
      customerSearchStatus: CustomerSearchStatusStrings;
      customerId: number;
    };
    productSearch: {
      productSearchStatus: ProductSearchStatusStrings;
      policyNumber: string;
    };
    currentTaxPeriod: CurrentTaxPeriodISALimits;
  };
}

export interface CurrentTaxPeriodISALimits {
  taxPeriodCode: string;
  taxPeriodDescription: string;
  startDateTime: string;
  endDateTime: string;
  lumpSumAccepted: boolean;
  monthlyPaymentsAccepted: boolean;
  newISAsAccepted: boolean;
  topUpsAccepted: boolean;
  totalAnnualAllowance: number;
  minNewLumpSumAmount: number;
  minTopUpLumpSumAmount: number;
  maxLumpSumAmount: number;
  minNewMonthlyAmount: number;
  minTopUpMonthlyAmount: number;
  maxMonthlyAmount: number;
  numberOfMonthlyPayments: number;
}

export const enum CustomerSearchStatus {
  NO_MATCH,
  EXACT_MATCH,
  PROBABLE_MATCH,
  PARTIAL_MATCH,
  MULTIPLE_MATCH,
}

export type CustomerSearchStatusStrings = keyof typeof CustomerSearchStatus;

export const enum ProductSearchStatus {
  NOT_FOUND,
  FOUND_TOPUP,
  FOUND_WUTM,
  FOUND_INVALID,
}

export type ProductSearchStatusStrings = keyof typeof ProductSearchStatus;
