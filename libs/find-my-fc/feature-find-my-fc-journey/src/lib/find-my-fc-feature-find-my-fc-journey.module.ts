import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedUiFormRadioModule } from '@wesleyan-frontend/shared/ui-form-radio';
import { SharedUiFormInputModule } from '@wesleyan-frontend/shared/ui-form-input';
import { SharedUiFormFieldErrorModule } from '@wesleyan-frontend/shared/ui-form-field-error';
import { SharedUiDirectivesModule } from '@wesleyan-frontend/shared/ui-directives';
import { SharedUiIconModule } from '@wesleyan-frontend/shared/ui-icon';

import { FindMyFCJourneyRoutingModule } from './find-my-fc-journey-routing.module';
import { CustomerSelectPageComponent } from './customer-select-page/customer-select-page.component';
import { ProfessionSelectPageComponent } from './profession-select-page/profession-select-page.component';
import { PostcodePageComponent } from './postcode-page/postcode-page.component';
import { YourDetailsPageComponent } from './your-details-page/your-details-page.component';
import { CustomerReferencePageComponent } from './customer-reference-page/customer-reference-page.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { CannotFindCustomerPageComponent } from './cannot-find-customer-page/cannot-find-customer-page.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FindMyFCJourneyRoutingModule,
    SharedUiFormRadioModule,
    SharedUiFormInputModule,
    SharedUiFormFieldErrorModule,
    SharedUiDirectivesModule,
    SharedUiIconModule,
  ],
  declarations: [
    CustomerSelectPageComponent,
    ProfessionSelectPageComponent,
    PostcodePageComponent,
    YourDetailsPageComponent,
    CustomerReferencePageComponent,
    CannotFindCustomerPageComponent,
    HeaderComponent,
    BodyComponent,
  ],
})
export class FindMyFcFeatureFindMyFcJourneyModule {}
