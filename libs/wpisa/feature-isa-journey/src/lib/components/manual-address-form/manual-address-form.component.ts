import {
  Component,
  OnInit,
  OnDestroy,
  forwardRef,
  Input,
  SimpleChanges,
  OnChanges,
  ViewEncapsulation,
} from '@angular/core';

import { NgFormsManager } from '@ngneat/forms-manager';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  ValidationErrors,
  FormControl,
  AbstractControl,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  Validator,
  NG_VALIDATORS,
} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import {
  ConfigService,
  YourDetails,
} from '@wesleyan-frontend/wpisa/data-access';

import { ManualAddressFormValue } from './manual-address-form-value.interface';
import { AppForms } from '../../core/models/app-forms.interface';
import { OnSubmitOrHasValueErrorStateMatcher } from '../../core/error-state-matcher';

@Component({
  selector: 'wes-manual-address-form',
  templateUrl: './manual-address-form.component.html',
  styleUrls: ['./manual-address-form.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ManualAddressFormComponent),
      multi: true,
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ManualAddressFormComponent),
      multi: true,
    },
  ],
})
export class ManualAddressFormComponent
  implements ControlValueAccessor, Validator, OnChanges, OnInit, OnDestroy {
  @Input() touched = false;
  @Input() submitAttempt = false;

  errorStateMatcher = new OnSubmitOrHasValueErrorStateMatcher();

  form = this.fb.group(
    {
      flatNumber: [''],
      houseNumber: [''],
      houseName: [''],
      street: ['', [Validators.required]],
      town: ['', [Validators.required]],
      region: [''],
      county: [''],
      postcode: ['', [Validators.required]],
    },
    {
      updateOn: 'blur',
      validators: [this.atLeastOneOf('houseNumber', 'houseName')],
    }
  );

  pageContent: YourDetails;
  controls: { [key: string]: AbstractControl } = {};

  private subscription = new Subscription();
  onChange: any = (_: ManualAddressFormValue) => {};
  onTouch: any = () => {};

  constructor(
    private configService: ConfigService,
    private formsManager: NgFormsManager<AppForms>,
    private fb: FormBuilder
  ) {
    this.pageContent = this.configService.content.yourDetails;

    this.formsManager.upsert('manualAddress', this.form, {
      withInitialValue: true,
    });
  }

  isFieldInvalid(fieldName: string) {
    return this.submitAttempt && this.form.get(fieldName).invalid;
  }

  ngOnInit(): void {
    this.subscription.add(
      this.form.valueChanges.subscribe((value: ManualAddressFormValue) => {
        this.onChange(value);
      })
    );

    this.controls = this.form.controls;
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

  isFieldEmpty(fieldName: string, fg: FormGroup) {
    const field = fg.get(fieldName).value;
    if (typeof field === 'number') {
      return field && field >= 0 ? true : false;
    }
    if (typeof field === 'string') {
      return field && field.length > 0 ? true : false;
    }
  }

  atLeastOneOf(...fields: string[]) {
    return (fg: FormGroup): ValidationErrors | null => {
      const isValid = fields.some((fieldName) =>
        this.isFieldEmpty(fieldName, fg)
      );

      const firstControl = fg.get(fields[0]);
      if (!isValid) {
        firstControl.setValidators(Validators.required);
        firstControl.setErrors({ required: true });
        firstControl.markAsDirty();
      } else {
        firstControl.clearValidators();
        firstControl.markAsPristine();
        firstControl.updateValueAndValidity({
          onlySelf: true,
          emitEvent: false,
        });
      }

      return isValid
        ? null
        : ({
            atLeastOne: true,
          } as ValidationErrors);
    };
  }

  writeValue(value: null | ManualAddressFormValue): void {
    if (value) {
      this.form.reset(value);
    }
  }

  registerOnChange(fn: () => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (_: ManualAddressFormValue) => {}): void {
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
    this.formsManager.unsubscribe('manualAddress');
    this.subscription.unsubscribe();
  }
}
