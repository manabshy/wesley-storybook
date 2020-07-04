import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { WesRadioGroup, WesRadioButton } from './radio';

@NgModule({
  imports: [MatCommonModule],
  exports: [WesRadioGroup, WesRadioButton, MatCommonModule],
  declarations: [WesRadioGroup, WesRadioButton],
})
export class SharedUiFormRadioModule {}
