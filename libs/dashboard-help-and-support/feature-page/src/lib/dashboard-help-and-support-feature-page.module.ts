import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TabsComponent } from './tabs/tabs.component';
import { MaterialModule } from './material-module';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { HighlightPipe } from './shared/highlight.pipe';
import { GlossarySectionComponent } from './components/glossary-section/glossary-section.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([], {
      useHash: false,
      initialNavigation: 'enabled',
      //   scrollPositionRestoration: 'enabled',
      //   anchorScrolling: 'enabled',
      // preloadingStrategy: PreloadAllModules,
    }),

    MaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    LandingPageComponent,
    SearchBoxComponent,
    TabsComponent,
    SearchResultsComponent,
    HighlightPipe,
    GlossarySectionComponent,
  ],
  exports: [LandingPageComponent],
})
export class DashboardHelpAndSupportFeaturePageModule {}
