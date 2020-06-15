import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { ReactiveFormsModule } from '@angular/forms';

import { KnowledgeCheckPageComponent } from './knowledge-check-page/knowledge-check-page.component';
import { CustomerDetailsPageComponent } from './customer-details-page/customer-details-page.component';
import { CustomStepperComponent } from './components/custom-stepper/custom-stepper.component';
import { KnowledgeCheckQ1FormComponent } from './components/knowledge-check-q1-form/knowledge-check-q1-form.component';
import { KnowledgeCheckQ2FormComponent } from './components/knowledge-check-q2-form/knowledge-check-q2-form.component';
import { OnlyNumberDirective } from './only-numbers.directive';
import { ManualAddressFormComponent } from './components/manual-address-form/manual-address-form.component';
import { AddressLookupFormComponent } from './components/address-lookup-form/address-lookup-form.component';
import { InvalidControlScrollDirective } from './invalid-control-scroll.directive';
import { ISAJourneyRoutingModule } from './isa-journey-routing.module';
@NgModule({
  imports: [
    CommonModule,
    ISAJourneyRoutingModule,
    ReactiveFormsModule,
    CdkStepperModule,
  ],
  declarations: [
    KnowledgeCheckPageComponent,
    CustomerDetailsPageComponent,
    CustomStepperComponent,
    KnowledgeCheckQ1FormComponent,
    KnowledgeCheckQ2FormComponent,
    OnlyNumberDirective,
    InvalidControlScrollDirective,
    ManualAddressFormComponent,
    AddressLookupFormComponent,
  ],
})
export class WpisaFeatureIsaJourneyModule {}
