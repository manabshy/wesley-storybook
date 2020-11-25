import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiStepperModule } from '@wesleyan-frontend/shared/ui-stepper';
import { SharedUiProgressSpinnerModule } from '@wesleyan-frontend/shared/ui-progress-spinner';
import { WpisaFeatureShellRoutingModule } from './wpisa-feature-shell-routing.module';
import { WpisaFeatureInactivityTimeoutModule } from '@wesleyan-frontend/wpisa/feature-inactivity-timeout';
import { HttpErrorInterceptor } from '@wesleyan-frontend/wpisa/data-access';

import { IsaErrorHandlerService } from './isa-error-handler.service';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    WpisaFeatureShellRoutingModule,
    SharedUiStepperModule,
    SharedUiProgressSpinnerModule,
    WpisaFeatureInactivityTimeoutModule,
  ],
  declarations: [ShellComponent],
  providers: [
    { provide: ErrorHandler, useClass: IsaErrorHandlerService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
})
export class WpisaFeatureShellModule {}
