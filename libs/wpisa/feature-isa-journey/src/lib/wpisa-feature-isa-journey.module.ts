import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { isaJourneyRoutes } from './routes';
import { KnowledgeCheckPageComponent } from './knowledge-check-page/knowledge-check-page.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(isaJourneyRoutes)],
  declarations: [KnowledgeCheckPageComponent],
})
export class WpisaFeatureIsaJourneyModule {}
