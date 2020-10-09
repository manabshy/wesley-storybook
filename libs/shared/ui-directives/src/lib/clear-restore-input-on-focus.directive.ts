import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * Clear the input on click, restore initial value if no change
 */
@Directive({
  selector: '[wesClearRestoreInputOnFocus]',
})
export class ClearRestoreInputOnFocusDirective {
  constructor(private _el: ElementRef) {}
  initialValue: string;

  @HostListener('focus', ['$event']) onInputClick(event) {
    this.initialValue = this._el.nativeElement.value;

    //Clear the input
    this._el.nativeElement.value = '';
  }

  @HostListener('blur', ['$event']) onInputBlur(event) {
    const currentValue = this._el.nativeElement.value;

    // restore original if no change
    if (currentValue === '') {
      this._el.nativeElement.value = this.initialValue;
    }
  }
}
