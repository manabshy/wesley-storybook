import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  AfterViewInit,
} from '@angular/core';
import { formatCurrency } from '@angular/common';

@Directive({
  selector: '[wesInputCurrencyMask]',
})
export class InputCurrencyMaskDirective implements AfterViewInit {
  private mask: HTMLSpanElement;

  constructor(
    private el: ElementRef<HTMLInputElement>,
    private renderer: Renderer2
  ) {
    this.createMaskElement();
  }

  ngAfterViewInit() {
    this.renderer.appendChild(
      this.mask,
      this.renderer.createText(this.el.nativeElement.value)
    );
    this.renderer.insertBefore(
      this.el.nativeElement.parentNode,
      this.mask,
      this.el.nativeElement
    );

    this.show();
  }

  @HostListener('focus', ['$event'])
  handleFocus(event: any) {
    this.hide();
  }

  @HostListener('blur', ['$event'])
  handleBlur(event: any) {
    this.show();
  }

  private createMaskElement() {
    this.mask = this.renderer.createElement('span');
    this.renderer.addClass(this.mask, 'wes-input-element');
    this.renderer.addClass(this.mask, 'wes-input-currency-mask');
    this.renderer.addClass(this.mask, 'd-none');
    this.renderer.setStyle(this.mask, 'position', 'absolute');
    this.renderer.setStyle(this.mask, 'color', 'initial');
  }

  private show() {
    const value: number = parseFloat(this.el.nativeElement.value);
    const formatted = this.formatCurrencyGBP(value);
    this.mask.innerText = formatted;

    if (value) {
      this.renderer.addClass(this.mask, 'd-inline-block');
      this.renderer.removeClass(this.mask, 'd-none');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'transparent');
    }
  }

  private hide() {
    this.renderer.addClass(this.mask, 'd-none');
    this.renderer.removeClass(this.mask, 'd-inline-block');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'initial');
  }

  private formatCurrencyGBP(value: number) {
    //Show 100.50 not 100.5 and 100 not 100.00
    const fraction = value % 1 === 0 ? '1.0-2' : '1.2-2';
    return formatCurrency(value, 'en-gb', '', 'GBP', fraction);
  }
}
