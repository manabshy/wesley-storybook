import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  ConfigService,
  SessionStorageService,
} from '@wesleyan-frontend/wpisa/data-access';
import { WpisaFeatureShellModule } from '@wesleyan-frontend/wpisa/feature-shell';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationInsightsMonitoringService } from '@wesleyan-frontend/shared/util-app-monitoring';

export function initializeApp(
  configService: ConfigService,
  appInsightsService: ApplicationInsightsMonitoringService
) {
  const promise = configService.loadConfig().then(() => {
    appInsightsService.init(
      configService.content.envConfig.applicationInsightsKey,
      'wpisa'
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
    WpisaFeatureShellModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService, ApplicationInsightsMonitoringService],
      useFactory: initializeApp,
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [SessionStorageService],
      useFactory: (sessionStorageService: SessionStorageService) => {
        return () => sessionStorageService.loadAppState();
      },
    },
    {
      provide: 'googleTagManagerId',
      deps: [ConfigService],
      useFactory: (config: ConfigService) => {
        config.loadConfig();
        return config.content.envConfig.gtmKey;
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
