import { Component, isDevMode } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, tap, map, mergeMap, startWith } from 'rxjs/operators';

import { ConfigService } from '@wesleyan-frontend/wpisa/data-access';
import { TimeoutService } from '@wesleyan-frontend/wpisa/feature-inactivity-timeout';

// declare ga as a function to set and sent the events
declare let ga: Function;

@Component({
  selector: 'wes-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  currentStepIndex$: Observable<number>;
  progressBarContent;
  isDevEnv = false;

  constructor(
    private configService: ConfigService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private timeoutService: TimeoutService
  ) {
    this.isDevEnv = isDevMode();
    this.timeoutService.initInactivityTimeout();

    this.progressBarContent = this.configService.content.progressBar;
    this.currentStepIndex$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(this.activatedRoute),
      tap(() => {
        //Google Analytics Page Tracking
        if (ga) {
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
      mergeMap((route) => route.data),
      map((event) => event.step)
    );
  }
}
