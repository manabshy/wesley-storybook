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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    WpisaFeatureShellModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return () => configService.loadConfig();
      },
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [SessionStorageService],
      useFactory: (sessionStorageService: SessionStorageService) => {
        return () => sessionStorageService.loadAppState();
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
