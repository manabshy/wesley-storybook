import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * Applies to the input elements where we want a text input type
 * but only allow float numbers to be typed like 100.23
 */
@Directive({
  selector: '[wesFloatOnly]',
})
export class OnlyFloatDirective {
  constructor(private _el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event) {
    const initialValue = this._el.nativeElement.value;

    this._el.nativeElement.value = initialValue.replace(/[^0-9.]*/g, '');
    if (initialValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
