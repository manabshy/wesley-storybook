export interface TargetRegularCalculatorDTO {
  balanceAmount: number;
  contributionAmount: number;
  targetAmount: number;
  frequency: string;
  riskCode: string;
  term: number;
}

export interface TargetRegularCalculatorResponse {
  contributions: Contributions;
}

export interface Contributions {
  amount: number;
  frequency: string;
  increase: Increase;
}

export interface Increase {
  basis: string;
  rate: number;
}
