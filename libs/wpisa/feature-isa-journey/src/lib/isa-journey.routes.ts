import { Route } from '@angular/router';
import { KnowledgeCheckPageComponent } from './knowledge-check-page/knowledge-check-page.component';
import { CustomerDetailsPageComponent } from './customer-details-page/customer-details-page.component';

export const isaJourneyRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'knowledge-check',
  },
  {
    path: 'knowledge-check',
    component: KnowledgeCheckPageComponent,
    data: { step: 0 },
  },
  {
    path: 'your-details',
    component: CustomerDetailsPageComponent,
    data: { step: 1 },
  },
];
