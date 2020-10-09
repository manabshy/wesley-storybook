import {
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
} from '@angular/core';
import { MAT_INPUT_VALUE_ACCESSOR } from '@wesleyan-frontend/shared/ui-form-input';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { formatNumber } from '@angular/common';

/**
 * https://medium.com/angular-in-depth/angular-material-matinput-control-with-thousands-separation-ebcbb7b027f4
 */
@Directive({
  selector: 'input[wesMatInputCommified]',
  providers: [
    {
      provide: MAT_INPUT_VALUE_ACCESSOR,
      useExisting: MatInputCommifiedDirective,
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MatInputCommifiedDirective),
      multi: true,
    },
  ],
})
export class MatInputCommifiedDirective {
  // tslint:disable-next-line:variable-name
  private _value: string | null;

  constructor(private elementRef: ElementRef<HTMLInputElement>) {
    console.log('created directive');
  }

  get value(): string | null {
    return this._value;
  }

  @Input('value')
  set value(value: string | null) {
    this._value = value;
    this.formatValue(value);
  }

  private formatValue(value: string | null) {
    if (value !== null) {
      this.elementRef.nativeElement.value = formatNumber(
        parseInt(value, 10),
        'en-gb'
      );
    } else {
      this.elementRef.nativeElement.value = '';
    }
  }

  private unFormatValue() {
    const value = this.elementRef.nativeElement.value;
    this._value = value.replace(/[^\d.-]/g, '');
    if (value) {
      this.elementRef.nativeElement.value = this._value;
    } else {
      this.elementRef.nativeElement.value = '';
    }
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value) {
    this._value = value.replace(/[^\d.-]/g, '');
    this._onChange(this._value);
  }

  @HostListener('blur')
  _onBlur() {
    this.formatValue(this._value);
  }

  @HostListener('focus')
  onFocus() {
    this.unFormatValue();
  }

  _onChange(value: any): void {}

  writeValue(value: any) {
    this._value = value;
    this.formatValue(this._value);
    // this._onChange(this._value);
  }

  registerOnChange(fn: (value: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched() {}
}
