import { emailValidator } from './shared-util-validators';
import { FormControl } from '@angular/forms';

const validValues = [
  'test@test.com',
  'test@test.as.df',
  'test_s@sd.co.uk',
  'f.g@test.com',
];
const invalidValues = [
  'test@test',
  'test',
  'test dd@d',
  'res@sdsd.',
  'test@test.co.',
];

describe('emailValidator', () => {
  validValues.forEach((value) =>
    it(`${value} should be valid`, () => {
      expect(emailValidator(new FormControl(value))).toBeNull();
    })
  );

  invalidValues.forEach((value) =>
    it(`${value} should be invalid`, () => {
      expect(emailValidator(new FormControl(value))).toEqual({
        invalid: true,
      });
    })
  );
});