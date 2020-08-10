import { AddressLookupFormValue } from '../../components/address-lookup-form/address-lookup-form-value.interface';
import { ManualAddressFormValue } from '../../components/manual-address-form/manual-address-form-value.interface';

export interface CustomerDetailsFormValue {
  title: string;
  firstName: string;
  lastName: string;
  dob: Dob;
  profession: string;
  nationalInsuranceNumber: string;
  nationality: string;
  addressLookup: AddressLookupFormValue;
  manualAddress: ManualAddressFormValue;
  personalEmail: string;
  personalMobileNumber: string;
  marketingEmail: null | boolean;
  marketingPost: null | boolean;
  marketingPhone: null | boolean;
}

export interface Dob {
  day: string;
  month: string;
  year: string;
}
