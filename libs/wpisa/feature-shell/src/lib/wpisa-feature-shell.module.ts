import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiStepperModule } from '@wesleyan-frontend/shared/ui-stepper';
import { SharedUiProgressSpinnerModule } from '@wesleyan-frontend/shared/ui-progress-spinner';

import { ShellComponent } from './shell/shell.component';
import { WpisaFeatureShellRoutingModule } from './wpisa-feature-shell-routing.module';
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
  ],
  declarations: [ShellComponent],
  providers: [],
})
export class WpisaFeatureShellModule {}
