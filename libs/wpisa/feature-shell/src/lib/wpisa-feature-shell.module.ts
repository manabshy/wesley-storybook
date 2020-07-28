import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiStepperModule } from '@wesleyan-frontend/shared/ui-stepper';
import { SharedUiProgressSpinnerModule } from '@wesleyan-frontend/shared/ui-progress-spinner';
import { WpisaFeatureShellRoutingModule } from './wpisa-feature-shell-routing.module';
import { WpisaFeatureInactivityTimeoutModule } from '@wesleyan-frontend/wpisa/feature-inactivity-timeout';

import { SharedUiSiteHeaderModule } from '@wesleyan-frontend/shared/ui-site-header';
import { SharedUiSiteFooterModule } from '@wesleyan-frontend/shared/ui-site-footer';
import { IsaErrorHandlerService } from './isa-error-handler.service';

import { ShellComponent } from './shell/shell.component';

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
  providers: [{ provide: ErrorHandler, useClass: IsaErrorHandlerService }],
})
export class WpisaFeatureShellModule {}
