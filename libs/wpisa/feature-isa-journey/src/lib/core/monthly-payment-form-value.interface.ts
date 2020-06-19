import { DirectDebitFormValue } from '../components/direct-debit-form/direct-debit-form-value.interface';

export interface MonthlyPaymentFormValue {
  amount: number;
  directDebit: DirectDebitFormValue;
}
