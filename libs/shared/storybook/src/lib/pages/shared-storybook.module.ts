import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { BeforeYouBeginPageComponent } from './before-you-begin-page/before-you-begin-page.component';
import { KcFailurePageComponent } from './kc-failure-page/kc-failure-page.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
@NgModule({
  imports: [CommonModule],
  declarations: [
    ProductPageComponent,
    BeforeYouBeginPageComponent,
    KcFailurePageComponent,
    ConfirmationPageComponent,
  ],
})
export class SharedStorybookModule {}
