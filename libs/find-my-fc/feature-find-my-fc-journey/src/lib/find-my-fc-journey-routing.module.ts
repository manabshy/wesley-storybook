import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { routesNames } from './find-my-fc-journey.routes.names';
import { CustomerSelectPageComponent } from './customer-select-page/customer-select-page.component';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: routesNames.CUSTOMER_SELECT,
  },
  {
    path: routesNames.CUSTOMER_SELECT,
    component: CustomerSelectPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindMyFCJourneyRoutingModule {}
