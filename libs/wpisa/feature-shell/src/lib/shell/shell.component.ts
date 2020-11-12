import { Component, isDevMode } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, tap, map, mergeMap, startWith } from 'rxjs/operators';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

import { ConfigService } from '@wesleyan-frontend/wpisa/data-access';
import {
  InactivityTimeoutService,
  TotalSessionTimeoutService,
} from '@wesleyan-frontend/wpisa/feature-inactivity-timeout';

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
    private timeoutService: InactivityTimeoutService,
    private totalSessionTimeoutService: TotalSessionTimeoutService,
    private gtmService: GoogleTagManagerService
  ) {
    this.isDevEnv = isDevMode();
    this.timeoutService.initInactivityTimeout();
    this.totalSessionTimeoutService.initSessionTimeout();

    this.progressBarContent = this.configService.content.progressBar;
    this.currentStepIndex$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(this.activatedRoute),
      tap(() => {
        const gtmTag = {
          event: 'Pageview',
          pagePath: window.location.pathname + window.location.hash,
        };

        this.gtmService.pushTag(gtmTag);
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
