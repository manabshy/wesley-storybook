import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { ConfigService } from '@wesleyan-frontend/set-a-target-calculator/data-access';
import { SetATargetCalculatorFeaturePageModule } from '@wesleyan-frontend/set-a-target-calculator/feature-page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SetATargetCalculatorFeaturePageModule,
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
