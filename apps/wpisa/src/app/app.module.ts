import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ConfigService } from '@wesleyan-frontend/wpisa/data-access';
import { SharedUiStepperModule } from '@wesleyan-frontend/shared/ui-stepper';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SharedUiStepperModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return () => configService.loadConfig();
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
