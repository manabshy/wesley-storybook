import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { WesError } from './error';
import { WesFormField } from './form-field';
import { WesHint } from './hint';
import { WesLabel } from './label';
// import { MatPlaceholder } from './placeholder';
import { WesPrefix } from './prefix';
import { WesSuffix } from './suffix';

@NgModule({
  declarations: [
    WesError,
    WesFormField,
    WesHint,
    WesLabel,
    WesPrefix,
    WesSuffix,
  ],
  imports: [CommonModule, MatCommonModule, ObserversModule],
  exports: [
    MatCommonModule,
    WesError,
    WesFormField,
    WesHint,
    WesLabel,
    WesPrefix,
    WesSuffix,
  ],
})
export class SharedUiFormFieldModule {}
