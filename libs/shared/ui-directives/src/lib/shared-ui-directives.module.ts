import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearRestoreInputOnFocusDirective } from './clear-restore-input-on-focus.directive';
import { OnlyNumberDirective } from './only-numbers.directive';
import { OnlyFloatDirective } from './only-float.directive';
import { MatInputCommifiedDirective } from './mat-input-commified.directive';
import { UppercaseDirective } from './uppercase.directive';
import { InvalidControlScrollContainerDirective } from './invalid-control-scroll-container.directive';
import { InvalidControlScrollDirective } from './invalid-control-scroll.directive';
import { ControlUpdateOnBlurOrChangeDirective } from './control-update-on-blur.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ClearRestoreInputOnFocusDirective,
    OnlyNumberDirective,
    OnlyFloatDirective,
    MatInputCommifiedDirective,
    UppercaseDirective,
    InvalidControlScrollContainerDirective,
    InvalidControlScrollDirective,
    ControlUpdateOnBlurOrChangeDirective,
  ],
  exports: [
    ClearRestoreInputOnFocusDirective,
    OnlyNumberDirective,
    OnlyFloatDirective,
    MatInputCommifiedDirective,
    UppercaseDirective,
    InvalidControlScrollContainerDirective,
    InvalidControlScrollDirective,
    ControlUpdateOnBlurOrChangeDirective,
  ],
})
export class SharedUiDirectivesModule {}
