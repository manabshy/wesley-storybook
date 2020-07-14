import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class OnSubmitOrHasValueErrorStateMatcher implements ErrorStateMatcher {
  private _submitted = false;
  constructor() {}
  set submitted(value: boolean) {
    this._submitted = value;
  }
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return !!(
      control &&
      control.invalid &&
      (control.value?.length > 0 || this._submitted || form?.submitted)
    );
  }
}
