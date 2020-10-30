import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { SharedUiSiteFooterModule } from '@wesleyan-frontend/shared/ui-site-footer';
import { SharedUiSiteHeaderModule } from '@wesleyan-frontend/shared/ui-site-header';
import { BeforeYouBeginPageComponent } from './before-you-begin-page/before-you-begin-page.component';
import { KcFailurePageComponent } from './kc-failure-page/kc-failure-page.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
@NgModule({
  imports: [CommonModule, SharedUiSiteFooterModule, SharedUiSiteHeaderModule],
  declarations: [
    ProductPageComponent,
    BeforeYouBeginPageComponent,
    KcFailurePageComponent,
    ConfirmationPageComponent,
  ],
})
export class SharedStorybookModule {}
