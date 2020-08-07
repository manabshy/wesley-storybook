import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { isEmpty } from 'ramda';

import {
  ConfigService,
  SessionStorageService,
} from '@wesleyan-frontend/wpisa/data-access';

@Injectable({
  providedIn: 'root',
})
export class FormDataGuard implements CanActivate {
  constructor(
    private sessionStorageService: SessionStorageService,
    private configService: ConfigService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return combineLatest([
      this.sessionStorageService.loaded$,
      this.sessionStorageService.appState$.pipe(
        map((data) => JSON.parse(data))
      ),
    ]).pipe(
      filter(([sessionDataLoaded, appState]) => sessionDataLoaded),
      map(([loaded, appState]) => {
        if (
          isEmpty(appState) ||
          isEmpty(appState.attemptId) ||
          isEmpty(appState.forms)
        ) {
          window.open(
            this.configService.content.endPoints.bookmarkRedirectPage,
            '_self'
          );
        }
        return true;
      })
    );
  }
}
