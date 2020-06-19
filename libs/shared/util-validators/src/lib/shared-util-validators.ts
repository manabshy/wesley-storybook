import {
  ValidatorFn,
  AbstractControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
import { differenceInYears, isValid, parseISO } from 'date-fns';

export const nationalInsuranceNumberValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const testRegexp: RegExp = /[A-CEGHJ-PR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}s?[0-9]{2}s?[0-9]{2}s?[0-9]{2}s?[A-DFMP ]/;
  const cleanValue = removeWhitespaceHyphens(control.value).toUpperCase();

  if (isEmptyInputValue(control.value)) {
    return null; // don't validate empty values to allow optional controls
  }

  const isValidNino = testRegexp.test(cleanValue);

  return !isValidNino
    ? { nationalInsuranceNumber: { value: control.value } }
    : null;
};

function removeWhitespaceHyphens(value: string) {
  return value.replace(/-|\s/g, '');
}

/**
 * An ISA customer must be aged between 18 and 74 inclusive
 */
export const isaAgeValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const day: number = control.get('day').value;
  const month: number = control.get('month').value;
  const year: number = control.get('year').value;

  const today = new Date(Date.now());
  const dob = new Date(year, month, day);

  if (!isValid(parseISO(`${year}-${month}-${day}`))) {
    return { invalidDate: true };
  }

  const age = differenceInYears(today, dob);

  if (age < 18 || 74 < age) {
    return { tooYoungOrTooOld: { age } };
  }

  return null;
};

/**
 * UK Mobile 07 Phone Numbers
 */
export const mobilePhoneUKValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const testRegexp: RegExp = /^(07[\d]{9})$/;
  const cleanValue = removeWhitespaceHyphens(control.value);

  if (isEmptyInputValue(control.value)) {
    return null; // don't validate empty values to allow optional controls
  }

  const isValidPhone = testRegexp.test(cleanValue);

  return !isValidPhone ? { invalid: true } : null;
};

export const emailValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const testRegexp: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (isEmptyInputValue(control.value)) {
    return null; // don't validate empty values to allow optional controls
  }

  const isValidEmail = testRegexp.test(control.value);

  return !isValidEmail ? { invalid: true } : null;
};

export const totalAnnualAllowanceValidator = (
  lumpSumAmountControl: AbstractControl,
  numberOfMonthlyPayments: number,
  totalAnnualAllowance: number
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    const isValidTotalAmount = isValidTotalAnnualAllowance(
      parseFloat(lumpSumAmountControl.value),
      parseFloat(control.value),
      numberOfMonthlyPayments,
      totalAnnualAllowance
    );

    return !isValidTotalAmount ? { totalAnnualAllowance: true } : null;
  };
};

/**
 * Total investment must not exceed £20,000
 * (Lump Sum amount + (n x regular contribution amounts)) must not exceed £20,000
 * @param lumpSumAmount
 * @param monthlyAmount
 * @param numberOfMonthlyPayments
 * @param totalAnnualAllowance
 */
const isValidTotalAnnualAllowance = (
  lumpSumAmount: number,
  monthlyAmount: number,
  numberOfMonthlyPayments: number,
  totalAnnualAllowance: number
): boolean => {
  return (
    lumpSumAmount + numberOfMonthlyPayments * monthlyAmount <=
    totalAnnualAllowance
  );
};

const isEmptyInputValue = (value: any): boolean => {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
};
