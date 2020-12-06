import { filter, tap, map, mergeMap, startWith, skip } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, isDevMode } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';

import { CookieConsentService } from '@wesleyan-frontend/shared/util-cookie-consent';
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

  constructor(
    private configService: ConfigService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private timeoutService: InactivityTimeoutService,
    private totalSessionTimeoutService: TotalSessionTimeoutService,
    private gtmService: GoogleTagManagerService,
    private cookieConsentService: CookieConsentService
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

    combineLatest([
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)
      ),
      //Only add GTM if consent given
      this.cookieConsentService.analyticsConsentGiven$.pipe(
        filter((given) => given),
        tap((_) => this.gtmService.addGtmToDom())
      ),
    ])
      //This is reached only when analyticsConsentGiven$ emits
      //and is true
      .pipe(
        //We don't want to trigger the event twice
        //as is first triggered above, so is
        //triggered with the next nav event
        skip(1),

        tap(() => {
          const gtmTag = {
            event: 'Pageview',
            pagePath: window.location.pathname + window.location.hash,
          };

          this.gtmService.pushTag(gtmTag);
        })
      )
      .subscribe();
  }
}
