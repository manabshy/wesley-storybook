import {
  Component,
  OnInit,
  OnDestroy,
  forwardRef,
  Input,
  SimpleChanges,
  OnChanges,
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

import { AddressFormValue } from './address-form-value.interface';

@Component({
  selector: 'wes-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressFormComponent),
      multi: true,
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressFormComponent),
      multi: true,
    },
  ],
})
export class AddressFormComponent
  implements ControlValueAccessor, Validator, OnChanges, OnInit, OnDestroy {
  @Input() touched: boolean;
  @Input() submitAttempt = false;

  form = this.fb.group(
    {
      flatNumber: [''],
      houseNumber: ['', [Validators.required]],
      houseName: [''],
      street: ['', [Validators.required]],
      town: ['', [Validators.required]],
      region: [''],
      county: [''],
      postcode: ['', [Validators.required]],
    },
    { updateOn: 'blur' }
  );

  pageContent: YourDetails;
  controls: { [key: string]: AbstractControl } = {};

  private subscription = new Subscription();
  onChange: any = (_: AddressFormValue) => {};
  onTouch: any = () => {};

  constructor(
    private configService: ConfigService,
    private formsManager: NgFormsManager,
    private fb: FormBuilder
  ) {
    this.pageContent = this.configService.content.yourDetails;
  }

  isFieldInvalid(fieldName: string) {
    return this.submitAttempt && this.form.get(fieldName).invalid;
  }

  ngOnInit(): void {
    this.subscription.add(
      this.form.valueChanges.subscribe((value: AddressFormValue) => {
        this.onChange(value);
      })
    );

    this.controls = this.form.controls;

    this.formsManager.upsert('manualAddress', this.form, {
      withInitialValue: true,
    });
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['touched'] && simpleChanges['touched'].currentValue) {
      this.form.markAllAsTouched();
    }
  }

  writeValue(value: null | AddressFormValue): void {
    if (value) {
      this.form.reset(value);
    }
  }

  registerOnChange(fn: () => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (_: AddressFormValue) => {}): void {
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