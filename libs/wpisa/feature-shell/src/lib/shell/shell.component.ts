import { filter, tap, map, mergeMap, startWith, skip } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, isDevMode } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

import { GoogleTagManagerService } from '@wesleyan-frontend/shared/util-gtm';
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
  consentGiven = false;
  gtmTracking$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    skip(1), //skip triggering for first page load as it's part of addGtmToDom()
    tap(() => {
      const gtmTag = {
        event: 'Pageview',
        pagePath: window.location.pathname + window.location.hash,
      };

      this.gtmService.pushTag(gtmTag);
    })
  );

  constructor(
    private configService: ConfigService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private timeoutService: InactivityTimeoutService,
    private totalSessionTimeoutService: TotalSessionTimeoutService,
    private gtmService: GoogleTagManagerService,
    private cookieService: CookieService
  ) {
    this.isDevEnv = isDevMode();
    this.timeoutService.initInactivityTimeout();
    this.totalSessionTimeoutService.initSessionTimeout();

    this.progressBarContent = this.configService.content.progressBar;
    this.currentStepIndex$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(this.activatedRoute),
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

    this.consentGiven =
      this.cookieService.get('WesleyanAnalyticalOptIn') === 'yes';

    if (this.consentGiven) {
      this.gtmService.addGtmToDom();
      this.gtmTracking$.subscribe();
    }
  }
}
