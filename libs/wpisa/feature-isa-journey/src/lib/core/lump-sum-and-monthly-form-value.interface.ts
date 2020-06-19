import { AddressLookupFormValue } from '../components/address-lookup-form/address-lookup-form-value.interface';
import { ManualAddressFormValue } from '../components/manual-address-form/manual-address-form-value.interface';
import { DirectDebitFormValue } from '../components/direct-debit-form/direct-debit-form-value.interface';

export interface LumpSumAndMonthlyFormValue {
  lumpSumAmount: number;
  monthlyAmount: number;
  directDebit: DirectDebitFormValue;
}
