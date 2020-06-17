export interface SearchCustomerDTO {
  customerDetails: PersonalDetailsDTO;
  currentAddress: CurrentAddressDTO;
  nationalityDetails?: NationalityDTO;
  customerPermissionGranted?: boolean;
  marketingPreferences: MarketingPreferencesDTO;
}

export interface CurrentAddressDTO {
  flat: string;
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
  permitForPost: boolean;
  permitForTelephone: boolean;
  permitForEmail: boolean;
}

export interface NationalityDTO {
  primaryNationality: string;
}
