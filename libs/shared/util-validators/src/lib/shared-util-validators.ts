import {
  ValidatorFn,
  AbstractControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
import { differenceInYears, isValid } from 'date-fns';

export const nationalInsuranceNumberValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const testRegexp: RegExp = /[A-CEGHJ-PR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}s?[0-9]{2}s?[0-9]{2}s?[0-9]{2}s?[A-DFMP ]/;
  const cleanValue = removeWhitespaceHyphens(control.value).toUpperCase();

  const isValidNino = testRegexp.test(cleanValue);

  return !isValidNino
    ? { nationalInsuranceNumber: { value: control.value } }
    : null;
};

function removeWhitespaceHyphens(value: string) {
  return value.replace(/-|\s/g, '');
}

/** An ISA customer must be aged between 18 and 74 inclusive  */
export const isaAgeValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const day: number = control.get('day').value;
  const month: number = control.get('month').value;
  const year: number = control.get('year').value;

  const today = new Date(Date.now());
  const dob = new Date(year, month, day);

  if (!isValid(dob)) {
    return { invalidDate: true };
  }

  const age = differenceInYears(today, dob);

  if (age < 18 || 74 < age) {
    return { tooYoungOrTooOld: { age } };
  }

  return null;
};
