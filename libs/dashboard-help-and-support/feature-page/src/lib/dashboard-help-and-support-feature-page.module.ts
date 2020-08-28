import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LandingPageComponent, SearchBoxComponent],
  exports: [LandingPageComponent],
})
export class DashboardHelpAndSupportFeaturePageModule {}
