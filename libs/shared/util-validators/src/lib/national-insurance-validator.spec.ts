import { nationalInsuranceNumberValidator } from './shared-util-validators';
import { FormControl } from '@angular/forms';

const validValues = ['SN 12 23 34 B', 'SN-12-23-34-B'];
const invalidValues = ['12 23 34 B'];

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
