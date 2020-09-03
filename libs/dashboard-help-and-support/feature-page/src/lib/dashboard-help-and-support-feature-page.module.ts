import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TabsComponent } from './tabs/tabs.component';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [CommonModule, MaterialModule, BrowserAnimationsModule],
  declarations: [LandingPageComponent, SearchBoxComponent, TabsComponent],
  exports: [LandingPageComponent],
})
export class DashboardHelpAndSupportFeaturePageModule {}
