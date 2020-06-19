import { totalAnnualAllowanceValidator } from './shared-util-validators';
import { FormControl, FormGroup } from '@angular/forms';

const validValues = [
  {
    lumpSumAmount: 19000,
    monthlyAmount: 25,
    numberOfMonthlyPayments: 11,
    totalAnnualAllowance: 20000,
  },
  {
    lumpSumAmount: 19750,
    monthlyAmount: 25,
    numberOfMonthlyPayments: 10,
    totalAnnualAllowance: 20000,
  },
  {
    lumpSumAmount: 19750,
    monthlyAmount: 1500,
    numberOfMonthlyPayments: 0,
    totalAnnualAllowance: 20000,
  },
  {
    lumpSumAmount: '1000.50',
    monthlyAmount: '1466.66',
    numberOfMonthlyPayments: 12,
    totalAnnualAllowance: 20000,
  },
  {
    lumpSumAmount: 1000.5,
    monthlyAmount: 1466.66,
    numberOfMonthlyPayments: 12,
    totalAnnualAllowance: 20000,
  },
  {
    lumpSumAmount: 1000.5,
    monthlyAmount: 1000,
    numberOfMonthlyPayments: 10,
    totalAnnualAllowance: 11000.5,
  },
];

const invalidValues = [
  {
    lumpSumAmount: 19000,
    monthlyAmount: 250,
    numberOfMonthlyPayments: 11,
    totalAnnualAllowance: 20000,
  },
  {
    lumpSumAmount: 2000,
    monthlyAmount: 1666.66,
    numberOfMonthlyPayments: 11,
    totalAnnualAllowance: 20000,
  },
  {
    lumpSumAmount: '2000',
    monthlyAmount: '1666.66',
    numberOfMonthlyPayments: 11,
    totalAnnualAllowance: 20000,
  },
];

describe('totalAnnualAllowanceValidator', () => {
  validValues.forEach((value) =>
    it(`LumpSum:${value.lumpSumAmount} Monthly:${value.monthlyAmount} NoMonths:${value.numberOfMonthlyPayments} should be valid`, () => {
      const lumpSumControl = new FormControl(value.lumpSumAmount);
      const monthlyControl = new FormControl(value.monthlyAmount);

      expect(
        totalAnnualAllowanceValidator(
          lumpSumControl,
          value.numberOfMonthlyPayments,
          value.totalAnnualAllowance
        )(monthlyControl)
      ).toBeNull();
    })
  );

  invalidValues.forEach((value) =>
    it(`LumpSum:${value.lumpSumAmount} Monthly:${value.monthlyAmount} NoMonths:${value.numberOfMonthlyPayments} should be invalid`, () => {
      const lumpSumControl = new FormControl(value.lumpSumAmount);
      const monthlyControl = new FormControl(value.monthlyAmount);
      expect(
        totalAnnualAllowanceValidator(
          lumpSumControl,
          value.numberOfMonthlyPayments,
          value.totalAnnualAllowance
        )(monthlyControl)
      ).toEqual({ totalAnnualAllowance: true });
    })
  );
});
