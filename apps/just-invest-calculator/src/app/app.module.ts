import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { ConfigService } from '@wesleyan-frontend/just-invest-calculator/data-access';
import { JustInvestCalculatorFeaturePageModule } from '@wesleyan-frontend/just-invest-calculator/feature-page';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    JustInvestCalculatorFeaturePageModule,
    HttpClientModule,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
