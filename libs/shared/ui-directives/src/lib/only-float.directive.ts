import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * Applies to the input elements where we want a text input type
 * but only allow float numbers to be typed like 100.23
 *
 * https://stackblitz.com/edit/limit-two-digit-decimal-place?file=src%2Fapp%2Ftwo-digit-decima-number.directive.ts
 */
@Directive({
  selector: '[wesFloatOnly]',
})
export class OnlyFloatDirective {
  // Allow decimal numbers and negative values
  private regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);
  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = [
    'Backspace',
    'Tab',
    'End',
    'Home',
    '-',
    'ArrowLeft',
    'ArrowRight',
    'Del',
    'Delete',
    'Enter',
  ];

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let current: string = this.el.nativeElement.value;
    const position = this.el.nativeElement.selectionStart;
    const next: string = [
      current.slice(0, position),
      event.key == 'Decimal' ? '.' : event.key,
      current.slice(position),
    ].join('');
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}
