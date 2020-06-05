export interface PostcodeLookupResponse {
  addresses: PostcodeLookupAddress[];
}

export interface PostcodeLookupAddress {
  singleLine: string;
  moniker: string;
}

export interface AddressDetails {
  line1: string;
  town: string;
  postcode: string;
}
