import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedUiProgressSpinnerModule } from '@wesleyan-frontend/shared/ui-progress-spinner';
import { SharedUiFormFieldErrorModule } from '@wesleyan-frontend/shared/ui-form-field-error';
import { SharedUiDirectivesModule } from '@wesleyan-frontend/shared/ui-directives';
import { SharedUiFormRadioModule } from '@wesleyan-frontend/shared/ui-form-radio';
import { SharedUiFormInputModule } from '@wesleyan-frontend/shared/ui-form-input';
import { SharedUiPipesModule } from '@wesleyan-frontend/shared/ui-pipes';
import { SharedUiIconModule } from '@wesleyan-frontend/shared/ui-icon';

import { CannotFindCustomerPageComponent } from './cannot-find-customer-page/cannot-find-customer-page.component';
import { CustomerReferencePageComponent } from './customer-reference-page/customer-reference-page.component';
import { ProfessionSelectPageComponent } from './profession-select-page/profession-select-page.component';
import { CustomerSelectPageComponent } from './customer-select-page/customer-select-page.component';
import { YourDetailsPageComponent } from './your-details-page/your-details-page.component';
import { FindMyFCJourneyRoutingModule } from './find-my-fc-journey-routing.module';
import { CRMErrorPageComponent } from './crm-error-page/crm-error-page.component';
import { PostcodePageComponent } from './postcode-page/postcode-page.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { CanActivatePostcode } from './core/can-activate-postcode.guard';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FindMyFCJourneyRoutingModule,
    SharedUiFormRadioModule,
    SharedUiFormInputModule,
    SharedUiFormFieldErrorModule,
    SharedUiDirectivesModule,
    SharedUiPipesModule,
    SharedUiIconModule,
    SharedUiProgressSpinnerModule,
  ],
  declarations: [
    CustomerSelectPageComponent,
    ProfessionSelectPageComponent,
    PostcodePageComponent,
    YourDetailsPageComponent,
    CustomerReferencePageComponent,
    CannotFindCustomerPageComponent,
    CRMErrorPageComponent,
    HeaderComponent,
    BodyComponent,
  ],
  providers: [CanActivatePostcode],
})
export class FindMyFcFeatureFindMyFcJourneyModule {}
