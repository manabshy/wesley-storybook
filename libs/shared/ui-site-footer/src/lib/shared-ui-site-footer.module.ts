import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSiteFooterComponent } from './ui-site-footer/ui-site-footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiSiteFooterComponent],
  exports: [UiSiteFooterComponent],
})
export class SharedUiSiteFooterModule {}
