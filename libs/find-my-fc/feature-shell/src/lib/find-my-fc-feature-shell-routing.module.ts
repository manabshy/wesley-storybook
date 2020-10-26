import { NgModule } from '@angular/core';
import { RouterModule, Route, PreloadAllModules } from '@angular/router';

import { ShellComponent } from './shell/shell.component';

export const routes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    loadChildren: () =>
      import('@wesleyan-frontend/find-my-fc/feature-find-my-fc-journey').then(
        (esModule) => esModule.FindMyFcFeatureFindMyFcJourneyModule
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
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class FindMyFCFeatureShellRoutingModule {}
