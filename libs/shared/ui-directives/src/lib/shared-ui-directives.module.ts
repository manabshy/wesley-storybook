import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearRestoreInputOnClickDirective } from './clear-restore-input-on-click.directive';
import { OnlyNumberDirective } from './only-numbers.directive';
import { OnlyFloatDirective } from './only-float.directive';
import { MatInputCommifiedDirective } from './mat-input-commified.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ClearRestoreInputOnClickDirective,
    OnlyNumberDirective,
    OnlyFloatDirective,
    MatInputCommifiedDirective,
  ],
  exports: [
    ClearRestoreInputOnClickDirective,
    OnlyNumberDirective,
    OnlyFloatDirective,
    MatInputCommifiedDirective,
  ],
})
export class SharedUiDirectivesModule {}
