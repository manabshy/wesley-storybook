import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObserversModule } from '@angular/cdk/observers';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatCheckbox } from './checkbox';
import { MatCheckboxRequiredValidator } from './checkbox-required-validator';

/** This module is used by both original and MDC-based checkbox implementations. */
@NgModule({
  exports: [MatCheckboxRequiredValidator],
  declarations: [MatCheckboxRequiredValidator],
})
export class _MatCheckboxRequiredValidatorModule {}

@NgModule({
  imports: [
    MatRippleModule,
    MatCommonModule,
    ObserversModule,
    _MatCheckboxRequiredValidatorModule,
  ],
  exports: [MatCheckbox, MatCommonModule, _MatCheckboxRequiredValidatorModule],
  declarations: [MatCheckbox],
})
export class SharedUiFormCheckboxModule {}
