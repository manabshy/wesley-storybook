export interface PostcodeLookupResponse {
  addresses: PostcodeLookupAddress[];
}

export interface PostcodeLookupAddress {
  singleLine: string;
  moniker: string;
}

export interface AddressDetails {
  flat: string;
  buildingName: string;
  buildingNumber: string;
  street: string;
  district: string;
  town: string;
  county: string;
  postcode: string;
  countryCode: string;
  countryName: string;
}
