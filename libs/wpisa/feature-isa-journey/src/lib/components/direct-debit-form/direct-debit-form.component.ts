import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  forwardRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS,
  Validator,
  FormControl,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { NgFormsManager } from '@ngneat/forms-manager';

import {
  LumpSumPayment,
  DirectDebitDetails,
} from '@wesleyan-frontend/wpisa/data-access';

import { DirectDebitFormValue } from './direct-debit-form-value.interface';
import { AppForms } from '../../core/app-forms.interface';
import { OnSubmitOrHasValueErrorStateMatcher } from '../../core/error-state-matcher';

@Component({
  selector: 'wes-direct-debit-form',
  templateUrl: './direct-debit-form.component.html',
  styleUrls: ['./direct-debit-form.component.scss'],
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DirectDebitFormComponent),
      multi: true,
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DirectDebitFormComponent),
      multi: true,
    },
  ],
})
export class DirectDebitFormComponent
  implements ControlValueAccessor, Validator, OnChanges, OnInit, OnDestroy {
  @Input() submitAttempt = false;
  @Input() touched = false;
  @Input() content: DirectDebitDetails;

  errorStateMatcher = new OnSubmitOrHasValueErrorStateMatcher();
  private subscription = new Subscription();

  form: FormGroup = this.fb.group(
    {
      accountHolderFullName: [
        null,
        [Validators.required, Validators.maxLength(100)],
      ],
      sortCode: this.fb.group({
        c1: [
          null,
          [
            Validators.required,
            Validators.pattern('[0-9]*'),
            Validators.minLength(2),
            Validators.maxLength(2),
          ],
        ],
        c2: [
          null,
          [
            Validators.required,
            Validators.pattern('[0-9]*'),
            Validators.minLength(2),
            Validators.maxLength(2),
          ],
        ],
        c3: [
          null,
          [
            Validators.required,
            Validators.pattern('[0-9]*'),
            Validators.minLength(2),
            Validators.maxLength(2),
          ],
        ],
      }),
      accountNumber: [
        null,
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(6),
          Validators.maxLength(8),
        ],
      ],
      bankName: [null, [Validators.required, Validators.maxLength(100)]],
    },
    { updateOn: 'blur' }
  );

  onChange: any = (_: DirectDebitFormValue) => {};
  onTouch: any = () => {};

  constructor(
    private fb: FormBuilder,
    private formsManager: NgFormsManager<AppForms>
  ) {
    this.formsManager.upsert('directDebit', this.form, {
      withInitialValue: true,
    });
  }

  ngOnInit(): void {
    this.subscription.add(
      this.form.valueChanges.subscribe((value: DirectDebitFormValue) => {
        this.onChange(value);
      })
    );
  }

  isFieldInvalid(fieldName: string) {
    return (
      this.form.get(fieldName).invalid &&
      (this.form.get(fieldName).dirty || this.submitAttempt)
    );
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['touched'] && simpleChanges['touched'].currentValue) {
      this.form.markAllAsTouched();
    }
    if (
      simpleChanges['submitAttempt'] &&
      simpleChanges['submitAttempt'].currentValue
    ) {
      this.errorStateMatcher.submitted = true;
    }
  }

  writeValue(value: null | DirectDebitFormValue): void {
    if (value) {
      this.form.reset(value);
    }
  }

  registerOnChange(fn: () => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (_: DirectDebitFormValue) => {}): void {
    this.onTouch = fn;
  }

  validate(control: AbstractControl): ValidationErrors {
    if (this.form.valid) {
      return null;
    }

    return {
      invalid: {
        value: this.form.value,
      },
    };
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('directDebit');
    this.subscription.unsubscribe();
  }
}
