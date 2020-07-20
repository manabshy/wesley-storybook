export interface InvestmentOptionFormValue {
  investmentOption: InvestmentOptionPaymentTypeStrings;
}

export const enum InvestmentOptionPaymentType {
  LUMP_SUM = 'LUMP_SUM',
  MONTHLY = 'MONTHLY',
  MONTHLY_AND_LUMP_SUM = 'MONTHLY_AND_LUMP_SUM',
}

export type InvestmentOptionPaymentTypeStrings = keyof typeof InvestmentOptionPaymentType;
