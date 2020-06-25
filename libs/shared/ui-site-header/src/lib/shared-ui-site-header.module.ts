import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSiteHeaderComponent } from './ui-site-header/ui-site-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiSiteHeaderComponent],
  exports: [UiSiteHeaderComponent],
})
export class SharedUiSiteHeaderModule {}
