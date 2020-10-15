import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
})
export class FindMyFcFeatureShellModule {}
