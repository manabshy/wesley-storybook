export interface GenericLookupsResponse {
  genericLookups: LookupCategory;
  currentTaxPeriod: CurrentTaxPeriod;
}

export interface CurrentTaxPeriod {
  taxPeriodCode: string;
  taxPeriodDescription: string;
  startDateTime: string;
  endDateTime: string;
  lumpSumAccepted: boolean;
  monthlyPaymentsAccepted: boolean;
  newISAsAccepted: boolean;
  topUpsAccepted: boolean;
  totalAnnualAllowance: number;
  minNewLumpSumAmount: number;
  minTopUpLumpSumAmount: number;
  minNewMonthlyAmount: number;
  minTopUpMonthlyAmount: number;
  numberOfMonthlyPayments: number;
}

export interface LookupCategory {
  title: CategoryItem[];
  nationality: CategoryItem[];
  marketSegment: CategoryItem[];
}

export interface CategoryItem {
  id: string;
  description: string;
}
