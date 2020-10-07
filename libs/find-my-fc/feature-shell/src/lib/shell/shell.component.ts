import { Component, isDevMode } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, tap, map, mergeMap, startWith } from 'rxjs/operators';

import { ConfigService } from '@wesleyan-frontend/find-my-fc/data-access';

// declare ga as a function to set and sent the events
declare let ga: Function;

@Component({
  selector: 'wes-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  currentStepIndex$: Observable<number>;
  progressBarContent;
  isDevEnv = false;

  constructor(
    private configService: ConfigService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.isDevEnv = isDevMode();
    /*
    this.currentStepIndex$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(this.activatedRoute),
      tap(() => {
        //Google Analytics Page Tracking
        if (typeof ga === 'function') {
          ga('set', 'page', window.location.pathname + window.location.hash);
          ga('send', 'pageview');
        }
      }),
      map(() => {
        let lastActivatedRoute = this.activatedRoute;

        while (lastActivatedRoute.firstChild) {
          lastActivatedRoute = lastActivatedRoute.firstChild;
        }

        return lastActivatedRoute;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    );*/
  }
}
