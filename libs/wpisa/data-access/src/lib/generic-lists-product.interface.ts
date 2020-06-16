export interface GenericLookupResponse {
  data: {
    genericLookups: GenericLookup[];
    currentTaxPeriod: CurrentTaxPeriod;
  };
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

export interface GenericLookup {
  categoryCode: string;
  members: Member[];
}

export interface Member {
  memberId: string;
  customerDescription: string;
}
