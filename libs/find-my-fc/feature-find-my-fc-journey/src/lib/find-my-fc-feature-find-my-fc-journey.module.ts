import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedUiFormRadioModule } from '@wesleyan-frontend/shared/ui-form-radio';
import { SharedUiFormInputModule } from '@wesleyan-frontend/shared/ui-form-input';
import { SharedUiFormFieldErrorModule } from '@wesleyan-frontend/shared/ui-form-field-error';
import { SharedUiDirectivesModule } from '@wesleyan-frontend/shared/ui-directives';

import { FindMyFCJourneyRoutingModule } from './find-my-fc-journey-routing.module';
import { CustomerSelectPageComponent } from './customer-select-page/customer-select-page.component';
import { ProfessionSelectPageComponent } from './profession-select-page/profession-select-page.component';
import { PostcodePageComponent } from './postcode-page/postcode-page.component';
import { YourDetailsPageComponent } from './your-details-page/your-details-page.component';
import { CustomerReferencePageComponent } from './customer-reference-page/customer-reference-page.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FindMyFCJourneyRoutingModule,
    SharedUiFormRadioModule,
    SharedUiFormInputModule,
    SharedUiFormFieldErrorModule,
    SharedUiDirectivesModule,
  ],
  declarations: [
    CustomerSelectPageComponent,
    ProfessionSelectPageComponent,
    PostcodePageComponent,
    YourDetailsPageComponent,
    CustomerReferencePageComponent,
  ],
})
export class FindMyFcFeatureFindMyFcJourneyModule {}
