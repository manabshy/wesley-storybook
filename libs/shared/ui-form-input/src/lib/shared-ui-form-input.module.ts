import { TextFieldModule } from '@angular/cdk/text-field';
import { NgModule } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedUiFormFieldModule } from '@wesleyan-frontend/shared/ui-form-field';
import { MatTextareaAutosize } from './autosize';
import { WesInput } from './input';

@NgModule({
  declarations: [WesInput, MatTextareaAutosize],
  imports: [TextFieldModule, SharedUiFormFieldModule],
  exports: [
    TextFieldModule,
    // We re-export the `MatFormFieldModule` since `MatInput` will almost always
    // be used together with `MatFormField`.
    SharedUiFormFieldModule,
    WesInput,
    MatTextareaAutosize,
  ],
  providers: [ErrorStateMatcher],
})
export class SharedUiFormInputModule {}
