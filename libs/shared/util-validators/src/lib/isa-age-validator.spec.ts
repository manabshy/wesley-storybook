import { isaAgeValidator } from './shared-util-validators';
import { FormControl, FormGroup } from '@angular/forms';

const validValues = [
  {
    dob: { day: 12, month: 12, year: 2000 },
    today: {
      day: 3,
      month: 5,
      year: 2020,
    },
    age: 19,
  },
  {
    dob: { day: 14, month: '07', year: 2002 },
    today: {
      day: 14,
      month: '07',
      year: 2020,
    },
    age: 18, //today
  },
  {
    dob: { day: 12, month: 12, year: 2001 },
    today: {
      day: 3,
      month: 5,
      year: 2020,
    },
    age: 18,
  },
  {
    dob: { day: 12, month: 12, year: 1945 },
    today: {
      day: 3,
      month: 5,
      year: 2020,
    },
    age: 74,
  },
];
const invalidAgeValues = [
  {
    dob: { day: 12, month: 12, year: 2004 },
    today: {
      day: 3,
      month: 5,
      year: 2020,
    },
    age: 15,
  },
  {
    dob: { day: 12, month: '12', year: 1944 },
    today: {
      day: 3,
      month: 5,
      year: 2020,
    },
    age: 75,
  },
];

const invalidDateFormat = [
  { day: 'a', month: '12', year: 1944 },
  { day: 'a', month: 'b', year: 1944 },
  { day: 'a', month: '12', year: 'c' },
  { day: '33', month: '12', year: 1979 },
  { day: 31, month: '13', year: 1979 },
];

describe('isaAgeValidator', () => {
  validValues.forEach((value) =>
    it(`${value.dob.day} ${value.dob.month} ${value.dob.year} should be valid`, () => {
      mockCurrentDate(value.today);

      const form = getDOBFormGroup(value.dob);

      expect(isaAgeValidator(form)).toBeNull();
    })
  );

  invalidAgeValues.forEach((value) =>
    it(`${value.dob.day} ${value.dob.month} ${value.dob.year} should be invalid`, () => {
      mockCurrentDate(value.today);

      const form = getDOBFormGroup(value.dob);

      expect(isaAgeValidator(form)).toEqual({
        tooYoungOrTooOld: { age: value.age },
      });
    })
  );

  invalidDateFormat.forEach((date) =>
    it(`${date.day} ${date.month} ${date.year} should be invalid`, () => {
      const form = getDOBFormGroup(date);

      expect(isaAgeValidator(form)).toEqual({ invalidDate: true });
    })
  );
});

const getDOBFormGroup = (dob) =>
  new FormGroup({
    day: new FormControl(dob.day),
    month: new FormControl(dob.month),
    year: new FormControl(dob.year),
  });

const mockCurrentDate = (date) => {
  const currentDate = new Date(date.year, date.month, date.day).valueOf();
  jest.spyOn(global.Date, 'now').mockImplementationOnce(() => currentDate);
};
