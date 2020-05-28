import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { isaJourneyRoutes } from './isa-journey.routes';
import { KnowledgeCheckPageComponent } from './knowledge-check-page/knowledge-check-page.component';
import { CustomerDetailsPageComponent } from './customer-details-page/customer-details-page.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(isaJourneyRoutes)],
  declarations: [KnowledgeCheckPageComponent, CustomerDetailsPageComponent],
})
export class WpisaFeatureIsaJourneyModule {}
