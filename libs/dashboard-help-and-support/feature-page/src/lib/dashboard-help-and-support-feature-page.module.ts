import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TabsComponent } from './tabs/tabs.component';
import { MaterialModule } from './material-module';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { HighlightPipe } from './shared/highlight.pipe';
@NgModule({
  imports: [CommonModule, MaterialModule, BrowserAnimationsModule],
  declarations: [
    LandingPageComponent,
    SearchBoxComponent,
    TabsComponent,
    SearchResultsComponent,
    HighlightPipe,
  ],
  exports: [LandingPageComponent],
})
export class DashboardHelpAndSupportFeaturePageModule {}
