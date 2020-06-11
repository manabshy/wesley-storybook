import {
  Component,
  OnInit,
  OnDestroy,
  forwardRef,
  Input,
  SimpleChanges,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

import { take, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { NgFormsManager } from '@ngneat/forms-manager';
import {
  FormBuilder,
  Validators,
  AbstractControl,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';

import {
  ConfigService,
  YourDetails,
} from '@wesleyan-frontend/wpisa/data-access';

import {
  AddressLookupService,
  PostcodeLookupAddress,
  AddressDetails,
} from '@wesleyan-frontend/shared/data-access-api';

import { AddressLookupFormValue } from './address-lookup-form-value.interface';

@Component({
  selector: 'wes-address-lookup-form',
  templateUrl: './address-lookup-form.component.html',
  styleUrls: ['./address-lookup-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressLookupFormComponent),
      multi: true,
    },
  ],
})
export class AddressLookupFormComponent
  implements ControlValueAccessor, OnChanges, OnInit, OnDestroy {
  @Input() touched: boolean;
  @Input() submitAttempt = false;

  @Output() showManualAddress = new EventEmitter();
  @Output() selectedAddress = new EventEmitter<AddressDetails>();

  form = this.fb.group({
    postcode: ['', { validators: [Validators.required], updateOn: 'blur' }],
    selectedAddressId: ['', Validators.required],
  });

  pageContent: YourDetails;

  controls: { [key: string]: AbstractControl } = {};
  addressList: PostcodeLookupAddress[] = [];

  private subscription = new Subscription();
  onChange: any = (_: AddressLookupFormValue) => {};
  onTouch: any = () => {};

  constructor(
    private configService: ConfigService,
    private formsManager: NgFormsManager,
    private fb: FormBuilder,
    private addressLookupService: AddressLookupService
  ) {
    this.pageContent = this.configService.content.yourDetails;
  }

  isFieldInvalid(fieldName: string) {
    return (
      (this.form.get(fieldName).invalid && this.form.get(fieldName).dirty) ||
      (this.form.get(fieldName).invalid && this.submitAttempt)
    );
  }

  findAddress(postcode: string) {
    this.resetAddressList();

    this.addressLookupService
      .findByPostcode(postcode)
      .pipe(
        tap((resp) => {
          console.log(resp);
          const a =
            resp === null
              ? this.controls.postcode.setErrors({ invalid: true })
              : (this.addressList = resp.addresses);
        }),
        take(1)
      )
      .subscribe();
  }

  onSelectedAddress(e) {
    this.addressLookupService
      .getAddressDetails(e.target.value)
      .pipe(
        tap((address) => this.selectedAddress.emit(address)),
        take(1)
      )
      .subscribe();
  }

  onShowManualAddress() {
    this.resetAddressList();
    this.form.controls.postcode.reset('');

    this.showManualAddress.emit();
  }

  resetAddressList() {
    this.addressList = [];
    this.form.controls.selectedAddressId.reset('');
  }

  ngOnInit(): void {
    this.subscription.add(
      this.form.valueChanges.subscribe((value: AddressLookupFormValue) => {
        this.onChange(value);
      })
    );

    this.controls = this.form.controls;

    this.formsManager.upsert('addressLookup', this.form, {
      withInitialValue: true,
    });
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['touched'] && simpleChanges['touched'].currentValue) {
      this.form.markAllAsTouched();
    }
  }

  writeValue(value: null | AddressLookupFormValue): void {
    if (value) {
      this.form.reset(value);
    }
  }

  registerOnChange(fn: () => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (_: AddressLookupFormValue) => {}): void {
    this.onTouch = fn;
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('addressLookup');
    this.subscription.unsubscribe();
  }
}
