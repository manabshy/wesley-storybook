import { Component, isDevMode } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, tap, map, mergeMap, startWith } from 'rxjs/operators';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

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
    private gtmService: GoogleTagManagerService
  ) {
    this.isDevEnv = isDevMode();
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
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
