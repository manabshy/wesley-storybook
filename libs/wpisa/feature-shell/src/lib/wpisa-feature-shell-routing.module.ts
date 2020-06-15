import { NgModule } from '@angular/core';
import { RouterModule, Route, PreloadAllModules } from '@angular/router';

import { ShellComponent } from './shell/shell.component';

export const routes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    loadChildren: () =>
      import('@wesleyan-frontend/wpisa/feature-isa-journey').then(
        (esModule) => esModule.WpisaFeatureIsaJourneyModule
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules,
      //   enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class WpisaFeatureShellRoutingModule {}
