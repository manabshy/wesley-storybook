import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ApplicationInsightsMonitoringService } from '@wesleyan-frontend/shared/util-app-monitoring';
import { ConfigService } from '@wesleyan-frontend/find-my-fc/data-access';

import { AppComponent } from './app.component';

export function initializeApp(
  configService: ConfigService,
  appInsightsService: ApplicationInsightsMonitoringService
) {
  const promise = configService.loadConfig().then(() => {
    appInsightsService.init(
      configService.content.envConfig.applicationInsightsKey,
      'fmfc'
    );
  });
  return () => promise;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService, ApplicationInsightsMonitoringService],
      useFactory: initializeApp,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
