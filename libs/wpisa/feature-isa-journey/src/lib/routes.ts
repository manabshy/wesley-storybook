import { Route } from '@angular/router';
import { KnowledgeCheckPageComponent } from './knowledge-check-page/knowledge-check-page.component';

export const isaJourneyRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'knowledge-check',
  },
  {
    path: 'knowledge-check',
    component: KnowledgeCheckPageComponent,
  },
];
