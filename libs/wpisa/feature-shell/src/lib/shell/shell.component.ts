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
import { ApplicationInsightsMonitoringService } from '@wesleyan-frontend/shared/util-app-monitoring';

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
    private cookieConsentService: CookieConsentService,
    private appInsightsService: ApplicationInsightsMonitoringService
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
      //Only use GTM if consent given
      this.cookieConsentService.performanceConsentGiven$.pipe(
        filter((given) => given),
        //GTM scripts are added externally by Cassie
        tap((_) => this.gtmService.gtmScriptsLoadedExternally())
      ),
    ])
      //This is reached only when analyticsConsentGiven$ emits
      //and is true
      .pipe(
        //We don't want to trigger the event twice
        //as is first triggered when cassie adds
        //it to the page, so is triggered with
        //the next nav event
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

    //Only use AppInsights if consent given
    this.cookieConsentService.functionalConsentGiven$
      .pipe(
        filter((given) => given),
        tap((_) => this.appInsightsService.startMonitoring())
      )
      .subscribe();
  }
}
