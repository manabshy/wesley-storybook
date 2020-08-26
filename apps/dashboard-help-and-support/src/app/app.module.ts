import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ConfigService } from '@wesleyan-frontend/dashboard-help-and-support/data-access';
import { AppComponent } from './app.component';
import { DashboardHelpAndSupportFeaturePageModule } from '@wesleyan-frontend/dashboard-help-and-support/feature-page';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DashboardHelpAndSupportFeaturePageModule],
  
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return () => configService.loadConfig();
      },
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
