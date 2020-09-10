export interface BudgetCalculatorDTO {
    dalanceAmount: number;
    dontributionAmount: number;
    frequency: string;
    riskCode: string;
    term: number;
  }

export interface BudgetCalculatorResponse {
    results: Result[];
}

export interface Result {
    percentile: number;
    terms:      Term[];
}

export interface Term {
    value: number;
    term:  number;
}
