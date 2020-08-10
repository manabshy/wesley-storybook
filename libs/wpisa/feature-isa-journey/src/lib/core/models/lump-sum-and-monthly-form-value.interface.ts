import { DirectDebitFormValue } from '../../components/direct-debit-form/direct-debit-form-value.interface';

export interface LumpSumAndMonthlyFormValue {
  totalAmount: {
    lumpSumAmount: string;
    monthlyAmount: string;
  };
  directDebit: DirectDebitFormValue;
}
