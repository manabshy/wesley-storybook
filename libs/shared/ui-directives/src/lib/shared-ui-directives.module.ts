import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearRestoreInputOnFocusDirective } from './clear-restore-input-on-focus.directive';
import { OnlyNumberDirective } from './only-numbers.directive';
import { OnlyFloatDirective } from './only-float.directive';
import { MatInputCommifiedDirective } from './mat-input-commified.directive';
import { UppercaseDirective } from './uppercase.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ClearRestoreInputOnFocusDirective,
    OnlyNumberDirective,
    OnlyFloatDirective,
    MatInputCommifiedDirective,
    UppercaseDirective,
  ],
  exports: [
    ClearRestoreInputOnFocusDirective,
    OnlyNumberDirective,
    OnlyFloatDirective,
    MatInputCommifiedDirective,
    UppercaseDirective,
  ],
})
export class SharedUiDirectivesModule {}
