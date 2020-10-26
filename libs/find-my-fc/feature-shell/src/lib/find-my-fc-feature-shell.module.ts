import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpErrorInterceptor } from '@wesleyan-frontend/find-my-fc/data-access';

import { SharedUiProgressSpinnerModule } from '@wesleyan-frontend/shared/ui-progress-spinner';

import { FindMyFCFeatureShellRoutingModule } from './find-my-fc-feature-shell-routing.module';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUiProgressSpinnerModule,
    FindMyFCFeatureShellRoutingModule,
  ],
  declarations: [ShellComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
})
export class FindMyFcFeatureShellModule {}
