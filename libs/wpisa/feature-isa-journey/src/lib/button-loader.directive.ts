import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  HostBinding,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[wesButtonLoader]',
})
export class ButtonLoaderDirective implements AfterViewInit {
  spinnerElement: HTMLSpanElement;
  textPlaceholder: HTMLSpanElement;
  savedText: string;
  isLoading = false;

  @Input() set wesButtonLoader(value: boolean) {
    this.isLoading = value;
    this.toggle(value);
  }

  @HostBinding('class.wes-button--loading') get loading() {
    return this.isLoading;
  }

  constructor(
    private element: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    this.toggle(this.wesButtonLoader);
  }

  ngAfterViewInit() {
    this.moveButtonTextInWrapper();
  }

  toggle(condition: boolean) {
    condition ? this.show() : this.hide();
  }

  show() {
    this.spinnerElement = this.renderer.createElement('span');
    this.renderer.addClass(this.spinnerElement, 'wes-spinner');
    this.renderer.addClass(this.spinnerElement, 'wes-spinner--button');

    // Set the button to maintain the same dimensions, even once we put the spinner inside.
    this.element.nativeElement.style.width = `${
      (this.element.nativeElement as HTMLElement).offsetWidth
    }px`;
    this.element.nativeElement.style.height = `${
      (this.element.nativeElement as HTMLElement).offsetHeight
    }px`;

    if (this.spinnerElement) {
      this.renderer.appendChild(
        this.element.nativeElement,
        this.spinnerElement
      );
    }
  }

  hide() {
    if (this.spinnerElement) {
      this.renderer.removeChild(
        this.element.nativeElement,
        this.spinnerElement
      );
    }
  }

  private moveButtonTextInWrapper() {
    this.textPlaceholder = this.renderer.createElement('span');
    this.renderer.addClass(this.textPlaceholder, 'wes-button-text');
    this.renderer.appendChild(
      this.textPlaceholder,
      this.renderer.createText(this.element.nativeElement.innerText)
    );
    this.element.nativeElement.innerText = '';
    this.renderer.appendChild(this.element.nativeElement, this.textPlaceholder);
  }
}
