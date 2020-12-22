import { Directive, ElementRef, HostListener } from '@angular/core';
import { DefaultValueAccessor, NgControl } from '@angular/forms';

/**
 * Hack for Angular bug happening when pressing enter on a updateOn:blur
 * control, the wrong value is passed to validators
 * https://github.com/angular/angular/issues/26683#issuecomment-646961591
 */
@Directive({
  // https://github.com/angular/angular/blob/master/packages/forms/src/directives/default_value_accessor.ts#L63
  selector:
    'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
})
export class ControlUpdateOnBlurOrChangeDirective {
  constructor(private elementRef: ElementRef, private ngControl: NgControl) {}

  @HostListener('input')
  onInput() {
    if (this.elementRef.nativeElement !== document.activeElement) {
      this.tryInvokeOnTouched();
    }
  }

  @HostListener('keydown.enter')
  onEnterKeydown() {
    this.tryInvokeOnTouched();
  }

  private tryInvokeOnTouched() {
    if (this.ngControl?.control?.updateOn === 'blur') {
      (this.ngControl.valueAccessor as DefaultValueAccessor).onTouched?.();
    }
  }
}
