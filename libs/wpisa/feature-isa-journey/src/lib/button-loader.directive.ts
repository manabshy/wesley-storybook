import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  HostBinding,
} from '@angular/core';
import { ProgressSpinnerComponent } from 'libs/shared/ui-progress-spinner/src/lib/progress-spinner/progress-spinner.component';

@Directive({
  selector: '[wesButtonLoader]',
})
export class ButtonLoaderDirective {
  spinner: ProgressSpinnerComponent;
  spinnerRef: ComponentRef<ProgressSpinnerComponent>;
  savedText: string;
  isLoading = false;

  //   @Input() loadText?: string;
  @Input() set wesButtonLoader(value: boolean) {
    this.isLoading = value;
    this.toggle(value);
  }

  @HostBinding('class.wes-button--loading') get loading() {
    return this.isLoading;
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.toggle(this.wesButtonLoader);
  }

  toggle(condition: boolean) {
    condition ? this.show() : this.hide();
  }

  show() {
    // Set the button to maintain the same dimensions, even once we put the spinner inside.
    this.element.nativeElement.style.width = `${
      (this.element.nativeElement as HTMLElement).offsetWidth
    }px`;
    this.element.nativeElement.style.height = `${
      (this.element.nativeElement as HTMLElement).offsetHeight
    }px`;

    // Create the spinner
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      ProgressSpinnerComponent
    );
    const componentRef = this.viewContainerRef.createComponent(factory);
    this.spinnerRef = componentRef;
    this.spinner = componentRef.instance;
    this.spinner.spinnerLocation = 'button';

    // if (this.loadText) {
    //   this.savedText = this.element.nativeElement.innerHTML;
    //   this.element.nativeElement.innerHTML = this.loadText;
    // }
    this.renderer.appendChild(
      this.element.nativeElement,
      this.spinnerRef.location.nativeElement
    );

    // this.element.nativeElement.appendChild(this.img);
    // this.matButton.disabled = true;
  }

  hide() {
    // this.img.remove();
    // this.matButton.disabled = false;
    if (this.spinnerRef) {
      this.renderer.removeChild(
        this.element.nativeElement,
        this.spinnerRef.location.nativeElement
      );
    }
    // if (this.savedText) {
    //   this.element.nativeElement.innerHTML = this.savedText;
    // }
  }
}
