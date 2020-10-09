import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearRestoreInputOnClickDirective } from './clear-restore-input-on-click.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ClearRestoreInputOnClickDirective],
  exports: [ClearRestoreInputOnClickDirective],
})
export class SharedUiDirectivesModule {}
