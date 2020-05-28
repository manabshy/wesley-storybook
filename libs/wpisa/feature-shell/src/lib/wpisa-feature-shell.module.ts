import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { SharedUiStepperModule } from '@wesleyan-frontend/shared/ui-stepper';

import { ShellComponent } from './shell/shell.component';

export const routes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@wesleyan-frontend/wpisa/feature-isa-journey').then(
            (esModule) => esModule.WpisaFeatureIsaJourneyModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), SharedUiStepperModule],
  declarations: [ShellComponent],
  exports: [RouterModule],
  providers: [],
})
export class WpisaFeatureShellModule {}
