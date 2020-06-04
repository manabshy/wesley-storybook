import { nationalInsuranceNumberValidator } from './shared-util-validators';
import { FormControl } from '@angular/forms';

const validValues = [
  'SN 12 23 34 B',
  'SN-12-23-34-B',
  'JA 81 45 74 B',
  'JA814574B',
  'JA-81-45-74-B',
  'Ja 81 45 74 b',
  'Ja814574b',
  'Ja-81-45-74-b',
];
const invalidValues = ['12 23 34 B', 'JA81457B', 'JA 81 45 7B', 'JA-81-45-7B'];

describe('nationalInsuranceValidator', () => {
  validValues.forEach((value) =>
    it(`${value} should be valid`, () => {
      expect(
        nationalInsuranceNumberValidator(new FormControl(value))
      ).toBeNull();
    })
  );

  invalidValues.forEach((value) =>
    it(`${value} should be invalid`, () => {
      expect(nationalInsuranceNumberValidator(new FormControl(value))).toEqual({
        nationalInsuranceNumber: { value },
      });
    })
  );
});
