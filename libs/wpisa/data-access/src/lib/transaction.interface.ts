import { SearchCustomerDTO } from './customer-details.interface';

export interface GetTransactionIdResponse {
  data: {
    transactionId: string;
  };
}

export interface SubmitTransactionDTO extends SearchCustomerDTO {
  transactionId: string;
  appTestAttemptId: number;
  taxPeriodCode: string;
  paymentType: PaymentTypeStrings;
  lumpAmount: number;
  regularAmount: number;
  lumpPaymentDetails?: LumpPaymentDetails;
  directDebitType: DirectDebitTypeStrings;
  onlineDirectDebitDetails: OnlineDirectDebitDetails;
  customerPermissionGranted: boolean;
  declarationsText: string;
}

export interface LumpPaymentDetails {
  paymentProvider: string;
  paymentProviderProtocolVersionNumber: string;
  paymentProviderTransactionNumber: string;
  paymentDateTime: string;
  paymentAmount: number;
  paymentCurrencyCode: string;
  cardType: string;
  maskedCardNumber: string;
  surname: string;
  firstName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postCode: string;
  countryCode: string;
  paymentType: string;
  md5SecurityKey: string;
  authorisationNumber: string;
  fraudCheckStatus: string;
  threeDSecureStatus: string;
  cavv: string;
}

export interface OnlineDirectDebitDetails {
  accountHolderFullName: string;
  sortCode: string;
  accountNumber: string;
  bankName?: string;
  customerConfirmedDD: boolean;
  accountValidated: boolean;
  bankValidationResponse?: string;
}

export const enum PaymentType {
  Lump = 'Lump',
  Regular = 'Regular',
  Both = 'Both',
}

export type PaymentTypeStrings = keyof typeof PaymentType;

export const enum DirectDebitType {
  REUSE = 'REUSE',
  POST = 'POST',
  SELF_PRINT = 'SELF_PRINT',
  ONLINE = 'ONLINE',
}

export type DirectDebitTypeStrings = keyof typeof DirectDebitType;
