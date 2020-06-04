import { mobilePhoneUKValidator } from './shared-util-validators';
import { FormControl } from '@angular/forms';

const validValues = [
  '07551 222 444',
  '07551222444',
  '07551-222-444',
  ' 07551222444 ',
  '07895512768',
  '07895 512 768',
  '07895-512-768',
  '(07895) 512768',
  '(07895)512768',
  '(07)895512768',
];
const invalidValues = [
  '+447551222444',
  '7551222444',
  '0755122244',
  '07551 222 4445',
  '+07551 222 444',
  '07551222a444',
];

describe('mobilePhoneUKValidator', () => {
  validValues.forEach((value) =>
    it(`${value} should be valid`, () => {
      expect(mobilePhoneUKValidator(new FormControl(value))).toBeNull();
    })
  );

  invalidValues.forEach((value) =>
    it(`${value} should be invalid`, () => {
      expect(mobilePhoneUKValidator(new FormControl(value))).toEqual({
        invalid: true,
      });
    })
  );
});
