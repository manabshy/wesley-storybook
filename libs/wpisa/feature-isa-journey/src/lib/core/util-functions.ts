import { formatCurrency } from '@angular/common';

export function formatCurrencyGBP(value: number) {
  return formatCurrency(value, 'en-gb', '£', 'GBP', '1.0-2');
}
