import { ValidatorFn, AbstractControl } from '@angular/forms';

export function nationalInsuranceNumberValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const testRegexp: RegExp = /[A-CEGHJ-PR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}s?[0-9]{2}s?[0-9]{2}s?[0-9]{2}s?[A-DFMP ]/;
  const cleanValue = removeWhitespaceHyphens(control.value).toUpperCase();

  const isValid = testRegexp.test(cleanValue);

  return !isValid
    ? { nationalInsuranceNumber: { value: control.value } }
    : null;
}

function removeWhitespaceHyphens(value: string) {
  return value.replace(/-|\s/g, '');
}
