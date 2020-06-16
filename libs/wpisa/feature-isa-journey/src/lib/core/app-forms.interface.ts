import { CustomerDetailsFormValue } from './customer-details-form.interface';
import { ManualAddressFormValue } from '../components/manual-address-form/manual-address-form-value.interface';
import { AddressLookupFormValue } from '../components/address-lookup-form/address-lookup-form-value.interface';

export interface AppForms {
  knowledgeCheckQ1: {
    question1: string;
  };
  knowledgeCheckQ2: {
    question2: string;
  };
  addressLookup: AddressLookupFormValue;
  manualAddress: ManualAddressFormValue;
  customerPersonalDetails: CustomerDetailsFormValue;
  investmentOptions: {
    investmentOption: string;
  };
}
