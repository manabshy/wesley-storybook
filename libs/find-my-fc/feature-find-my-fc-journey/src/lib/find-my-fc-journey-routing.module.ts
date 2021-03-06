import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { routesNames } from '@wesleyan-frontend/find-my-fc/util-const';

import { CustomerSelectPageComponent } from './customer-select-page/customer-select-page.component';
import { ProfessionSelectPageComponent } from './profession-select-page/profession-select-page.component';
import { PostcodePageComponent } from './postcode-page/postcode-page.component';
import { YourDetailsPageComponent } from './your-details-page/your-details-page.component';
import { CustomerReferencePageComponent } from './customer-reference-page/customer-reference-page.component';
import { CannotFindCustomerPageComponent } from './cannot-find-customer-page/cannot-find-customer-page.component';
import { CRMErrorPageComponent } from './crm-error-page/crm-error-page.component';
import { CanActivatePostcode } from './core/can-activate-postcode.guard';

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
  {
    path: routesNames.PROFESSION_SELECT,
    component: ProfessionSelectPageComponent,
  },
  {
    path: routesNames.POSTCODE,
    component: PostcodePageComponent,
    canActivate: [CanActivatePostcode],
  },
  {
    path: routesNames.YOUR_DETAILS,
    component: YourDetailsPageComponent,
  },
  {
    path: routesNames.CUSTOMER_REFERENCE,
    component: CustomerReferencePageComponent,
  },
  {
    path: routesNames.CANNOT_FIND_CUSTOMER,
    component: CannotFindCustomerPageComponent,
  },
  {
    path: routesNames.CRM_ERROR,
    component: CRMErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindMyFCJourneyRoutingModule {}
