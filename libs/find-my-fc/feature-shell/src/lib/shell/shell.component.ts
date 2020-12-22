import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, isDevMode } from '@angular/core';
import { filter, tap, skip } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';

import { CookieConsentService } from '@wesleyan-frontend/shared/util-cookie-consent';
import { GoogleTagManagerService } from '@wesleyan-frontend/shared/util-gtm';
import { ConfigService } from '@wesleyan-frontend/find-my-fc/data-access';

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
    private activatedRoute: ActivatedRoute,
    private gtmService: GoogleTagManagerService,
    private cookieConsentService: CookieConsentService
  ) {
    document.getElementsByTagName('body')[0].classList.add('find-my-fc-app');

    this.isDevEnv = isDevMode();

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
  }
}
