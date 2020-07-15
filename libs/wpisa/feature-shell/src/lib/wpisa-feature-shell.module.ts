import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiStepperModule } from '@wesleyan-frontend/shared/ui-stepper';
import { SharedUiProgressSpinnerModule } from '@wesleyan-frontend/shared/ui-progress-spinner';
import { WpisaFeatureShellRoutingModule } from './wpisa-feature-shell-routing.module';
import { WpisaFeatureInactivityTimeoutModule } from '@wesleyan-frontend/wpisa/feature-inactivity-timeout';

import { ShellComponent } from './shell/shell.component';
import { SharedUiSiteHeaderModule } from '@wesleyan-frontend/shared/ui-site-header';
import { SharedUiSiteFooterModule } from '@wesleyan-frontend/shared/ui-site-footer';
@NgModule({
  imports: [
    CommonModule,
    WpisaFeatureShellRoutingModule,
    SharedUiStepperModule,
    SharedUiProgressSpinnerModule,
    SharedUiSiteHeaderModule,
    SharedUiSiteFooterModule,
    WpisaFeatureInactivityTimeoutModule,
  ],
  declarations: [ShellComponent],
  providers: [],
})
export class WpisaFeatureShellModule {}
