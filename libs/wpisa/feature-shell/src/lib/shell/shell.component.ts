import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, tap, map, mergeMap } from 'rxjs/operators';

import { ConfigService } from '@wesleyan-frontend/wpisa/data-access';

@Component({
  selector: 'wes-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  pageTitle = '';
  currentStepIndex$: Observable<number>;
  data;
  constructor(
    private configService: ConfigService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.data = this.configService.content;
    this.pageTitle = this.data.start.pageTitle;

    this.currentStepIndex$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
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
