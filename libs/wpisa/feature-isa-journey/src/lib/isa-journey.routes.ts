import { Route } from '@angular/router';
import { KnowledgeCheckPageComponent } from './knowledge-check-page/knowledge-check-page.component';
import { CustomerDetailsPageComponent } from './customer-details-page/customer-details-page.component';
import { isaRoutesNames } from './isa-journey.routes.names';

export const isaJourneyRoutes: Route[] = [
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
];
