import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { SharedUiSiteFooterModule } from '@wesleyan-frontend/shared/ui-site-footer';
import { SharedUiSiteHeaderModule } from '@wesleyan-frontend/shared/ui-site-header';
@NgModule({
  imports: [CommonModule, SharedUiSiteFooterModule, SharedUiSiteHeaderModule],
  declarations: [ProductPageComponent],
})
export class SharedStorybookModule {}
