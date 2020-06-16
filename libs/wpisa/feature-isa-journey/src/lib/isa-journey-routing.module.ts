import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { KnowledgeCheckPageComponent } from './knowledge-check-page/knowledge-check-page.component';
import { CustomerDetailsPageComponent } from './customer-details-page/customer-details-page.component';
import { isaRoutesNames } from './isa-journey.routes.names';
import { InvestmentOptionsPageComponent } from './investment-options-page/investment-options-page.component';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: isaRoutesNames.KNOWLEDGE_CHECK,
  },
  {
    path: isaRoutesNames.KNOWLEDGE_CHECK,
    component: KnowledgeCheckPageComponent,
    data: { step: 0 },
  },
  {
    path: isaRoutesNames.YOUR_DETAILS,
    component: CustomerDetailsPageComponent,
    data: { step: 1 },
  },
  {
    path: isaRoutesNames.INVESTMENT_OPTIONS,
    component: InvestmentOptionsPageComponent,
    data: { step: 2 },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ISAJourneyRoutingModule {}
