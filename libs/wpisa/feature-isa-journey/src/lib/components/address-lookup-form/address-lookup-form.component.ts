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

import {
  take,
  tap,
  catchError,
  finalize,
  withLatestFrom,
} from 'rxjs/operators';
import { Subscription, Observable, of, throwError } from 'rxjs';
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
  PostcodeLookupAddress,
  AddressDetails,
} from '@wesleyan-frontend/shared/data-access-api';

import { OnSubmitOrHasValueErrorStateMatcher } from '../../core/error-state-matcher';
import { AddressLookupFacade } from '../../core/services/address-lookup.facade';
import { AddressLookupFormValue } from './address-lookup-form-value.interface';
import { AppForms } from '../../core/models/app-forms.interface';

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
  @Input() submitAttempt$: Observable<boolean>;

  @Output() searchedAddress = new EventEmitter<string>();
  @Output() selectedAddress = new EventEmitter<AddressDetails>();
  @Output() showManualAddress = new EventEmitter();

  findingAddress = false;
  errorStateMatcher = new OnSubmitOrHasValueErrorStateMatcher();
  form = this.fb.group({
    postcode: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'blur',
      },
    ],
    selectedAddressId: ['', Validators.required],
  });

  private _submitAttempt = false;
  pageContent: YourDetails;

  controls: { [key: string]: AbstractControl } = {};
  addressList$: Observable<PostcodeLookupAddress[]> = this.addressLookupFacade
    .addressList$;

  private subscription = new Subscription();
  onChange: any = (_: AddressLookupFormValue) => {};
  onTouch: any = () => {};

  constructor(
    private configService: ConfigService,
    private formsManager: NgFormsManager<AppForms>,
    private fb: FormBuilder,
    private addressLookupFacade: AddressLookupFacade
  ) {
    this.pageContent = this.configService.content.yourDetails;

    this.formsManager.upsert('addressLookup', this.form, {
      withInitialValue: true,
    });

    this.controls = this.form.controls;
  }

  ngOnInit(): void {
    this.subscription.add(
      this.form.valueChanges.subscribe((value: AddressLookupFormValue) => {
        this.onChange(value);
      })
    );
    this.subscription.add(
      this.submitAttempt$
        .pipe(
          tap((attempt) => (this._submitAttempt = attempt)),
          tap((_) => this.form.markAllAsTouched()),
          tap((_) => (this.errorStateMatcher.submitted = this._submitAttempt))
        )
        .subscribe()
    );

    this.subscription.add(
      this.submitAttempt$
        .pipe(
          withLatestFrom(this.addressList$),
          tap(([submitted, searchedAddresses]) => {
            if (
              this.controls.postcode.value.length > 0 &&
              searchedAddresses.length === 0
            ) {
              this.setPostcodeSearchNotInitiatedError();
            }
          })
        )
        .subscribe()
    );
  }

  isFieldInvalid(fieldName: string) {
    return (
      this.form.get(fieldName).invalid &&
      (this.form.get(fieldName).dirty || this._submitAttempt)
    );
  }

  findAddress(postcode: string) {
    this._submitAttempt = true;
    this.errorStateMatcher.submitted = true;
    this.searchedAddress.emit(postcode);

    this.resetAddressList();
    this.form.markAllAsTouched();

    //Update validity for error when case postcode was filled
    //but find button not pressed
    this.controls.postcode.updateValueAndValidity();

    if (this.form.controls.postcode.valid) {
      this.findingAddress = true;
      this._submitAttempt = false;
      this.errorStateMatcher.submitted = false;

      this.addressLookupFacade
        .findByPostcode(postcode)
        .pipe(
          tap((resp) => {
            if (resp === null) {
              this.setPostcodeInvalidOrServiceFailure();
            }
          }),
          catchError((err) => {
            this.setPostcodeInvalidOrServiceFailure();

            return throwError(err);
          }),
          finalize(() => (this.findingAddress = false)),
          take(1)
        )
        .subscribe();
    }
  }

  onSelectedAddress(e) {
    this.addressLookupFacade
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
    this.addressLookupFacade.reset();
    this.form.controls.selectedAddressId.reset('');
  }

  setPostcodeInvalidOrServiceFailure() {
    this.controls.postcode.setErrors({ postcodeOrServiceFailure: true });
    this.controls.postcode.markAsDirty();
  }

  setPostcodeSearchNotInitiatedError() {
    this.controls.postcode.setErrors({ postcodeSearchNotInitiated: true });
    this.controls.postcode.markAsDirty();
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
