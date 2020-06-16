export interface SearchCustomerDTO {
  customerDetails: {
    title: string;
    forename: string;
    surname: string;
    dateOfBirth: string;
    mobilePhoneNumber: string;
    niNumber: string;
    emailAddress: string;
    marketSegmentCode: string;
  };
  currentAddress: {
    flat: string;
    houseName: string;
    street: string;
    district: string;
    town: string;
    county: string;
    postcode: string;
    countryCode: string;
    countryName: string;
  };
  nationalityDetails: {
    primaryNationality: string;
  };
  customerPermissionGranted: boolean;
  marketingPreferences: {
    permitForPost: boolean;
    permitForTelephone: boolean;
    permitForEmail: boolean;
  };
}
