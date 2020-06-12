import {
  Directive,
  HostListener,
  ElementRef,
  Injector,
  Optional,
} from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime, take } from 'rxjs/operators';

import { InvalidControlScrollContainerDirective } from './invalid-control-scroll-container.directive';

/**
 * https://medium.com/javascript-everyday/how-to-scroll-to-first-invalid-control-once-a-form-has-been-submitted-eb47d9fbc6e
 */
@Directive({
  selector: '[wesInvalidControlScroll]',
})
export class InvalidControlScrollDirective {
  private get containerEl(): HTMLElement | Window {
    return this.scrollContainerDir
      ? this.scrollContainerDir.containerEl
      : window;
  }

  constructor(
    private el: ElementRef,
    private formGroupDir: FormGroupDirective,
    @Optional()
    private scrollContainerDir: InvalidControlScrollContainerDirective
  ) {}

  @HostListener('ngSubmit') onSubmit() {
    if (this.formGroupDir.control.invalid) {
      this.scrollToFirstInvalidControl();
    }
  }

  private scrollToFirstInvalidControl() {
    const firstInvalidControl: HTMLElement = this.el.nativeElement.querySelector(
      'input.ng-invalid, select.ng-invalid'
    );
    console.log(firstInvalidControl);
    this.containerEl.scroll({
      top: this.getTopOffset(firstInvalidControl),
      left: 0,
      behavior: 'smooth',
    });

    fromEvent(this.containerEl, 'scroll')
      .pipe(debounceTime(100), take(1))
      .subscribe(() => firstInvalidControl.focus());
  }

  private getTopOffset(controlEl: HTMLElement): number {
    const labelOffset = 50;
    const controlElTop = controlEl.getBoundingClientRect().top;

    if (this.scrollContainerDir && this.containerEl instanceof HTMLElement) {
      const containerTop = this.containerEl.getBoundingClientRect().top;
      const absoluteControlElTop = controlElTop + this.containerEl.scrollTop;

      return absoluteControlElTop - containerTop - labelOffset;
    } else {
      const absoluteControlElTop = controlElTop + window.scrollY;

      return absoluteControlElTop - labelOffset;
    }
  }
}
