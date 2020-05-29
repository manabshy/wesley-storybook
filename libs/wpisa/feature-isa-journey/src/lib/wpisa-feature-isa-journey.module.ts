import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { isaJourneyRoutes } from './isa-journey.routes';
import { KnowledgeCheckPageComponent } from './knowledge-check-page/knowledge-check-page.component';
import { CustomerDetailsPageComponent } from './customer-details-page/customer-details-page.component';
import { CustomStepperComponent } from './components/custom-stepper/custom-stepper.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(isaJourneyRoutes),
    CdkStepperModule,
  ],
  declarations: [
    KnowledgeCheckPageComponent,
    CustomerDetailsPageComponent,
    CustomStepperComponent,
  ],
})
export class WpisaFeatureIsaJourneyModule {}
