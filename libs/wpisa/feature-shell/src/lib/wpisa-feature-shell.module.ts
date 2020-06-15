import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiStepperModule } from '@wesleyan-frontend/shared/ui-stepper';

import { ShellComponent } from './shell/shell.component';
import { WpisaFeatureShellRoutingModule } from './wpisa-feature-shell-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WpisaFeatureShellRoutingModule,
    SharedUiStepperModule,
  ],
  declarations: [ShellComponent],
  providers: [],
})
export class WpisaFeatureShellModule {}
