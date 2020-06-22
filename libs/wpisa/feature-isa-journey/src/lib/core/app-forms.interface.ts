import { CustomerDetailsFormValue } from './customer-details-form-value.interface';
import { ManualAddressFormValue } from '../components/manual-address-form/manual-address-form-value.interface';
import { AddressLookupFormValue } from '../components/address-lookup-form/address-lookup-form-value.interface';
import { LumpSumPaymentFormValue } from '../components/lump-sum-payment-form/lump-sum-payment-form-value.interface';
import { MonthlyPaymentFormValue } from './monthly-payment-form-value.interface';
import { DirectDebitFormValue } from '../components/direct-debit-form/direct-debit-form-value.interface';
import { LumpSumAndMonthlyFormValue } from './lump-sum-and-monthly-form-value.interface';
import { DeclarationFormValue } from './declaration-form-value.interface';

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
  lumpSumPayment: LumpSumPaymentFormValue;
  monthlyPayment: MonthlyPaymentFormValue;
  lumpSumAndMonthly: LumpSumAndMonthlyFormValue;
  direcDebit: DirectDebitFormValue;
  declaration: DeclarationFormValue;
}
