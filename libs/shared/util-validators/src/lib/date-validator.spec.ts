import { dateValidator } from './shared-util-validators';
import { FormControl, FormGroup } from '@angular/forms';

const validValues = [
  { day: 12, month: 12, year: 2000 },
  { day: 14, month: '07', year: 2002 },
  { day: 12, month: 12, year: 2001 },
  { day: 12, month: 12, year: 1945 },
  { day: 11, month: 12, year: 2045 },
];

const invalidDateFormat = [
  { day: 'a', month: '12', year: 1944 },
  { day: 'a', month: 'b', year: 1944 },
  { day: 'a', month: '12', year: 'c' },
  { day: '33', month: '12', year: 1979 },
  { day: 31, month: '13', year: 1979 },
];

describe('dateValidator', () => {
  validValues.forEach((value) =>
    it(`${value.day} ${value.month} ${value.year} should be valid`, () => {
      const form = getDOBFormGroup(value);

      expect(dateValidator(form)).toBeNull();
    })
  );

  invalidDateFormat.forEach((date) =>
    it(`${date.day} ${date.month} ${date.year} should be invalid`, () => {
      const form = getDOBFormGroup(date);

      expect(dateValidator(form)).toEqual({ invalidDate: true });
    })
  );
});

const getDOBFormGroup = (dob) =>
  new FormGroup({
    day: new FormControl(dob.day),
    month: new FormControl(dob.month),
    year: new FormControl(dob.year),
  });
