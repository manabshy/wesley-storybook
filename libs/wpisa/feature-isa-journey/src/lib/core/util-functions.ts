import { formatCurrency } from '@angular/common';

export function formatCurrencyGBP(value: number) {
  //Show 100.50 not 100.5 and 100 not 100.00
  const fraction = value % 10 === 0 ? '1.0-2' : '1.2-2';

  return formatCurrency(value, 'en-gb', '£', 'GBP', fraction);
}
