export interface InvestmentCardViewModel {
  showLumpSum: boolean;
  showMonthly: boolean;
  lumpSumPayment: { label: string; value: string };
  monthlyPayment: { label: string; value: string };
  total: { label: string; value: string };
  smallCopy: string;
}
