export interface PostcodeLookupResponse {
  addresses: PostcodeLookupAddress[];
}

export interface PostcodeLookupAddress {
  singleLine: string;
  moniker: string;
}

export interface AddressDetails {
  line1: string;
  line2: string;
  line3: string;
  town: string;
  postcode: string;
  country: string;

  // flat: string;
  // buildingName: string;
  // buildingNumber: string;
  // street: string;
  // district: string;
  // town: string;
  // county: string;
  // postcode: string;
  // countryCode: string;
  // countryName: string;
}
