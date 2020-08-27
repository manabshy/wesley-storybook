import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { isEmpty } from 'ramda';

import {
  ConfigService,
  SessionStorageService,
} from '@wesleyan-frontend/wpisa/data-access';
import { isaRoutesNames } from '../isa-journey.routes.names';
import { AppState } from './models/app-state.interface';

@Injectable({
  providedIn: 'root',
})
export class FormDataGuard implements CanActivate {
  constructor(
    private sessionStorageService: SessionStorageService,
    private configService: ConfigService,
    private router: Router
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
        map<string, AppState>((data) => JSON.parse(data))
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

        if (!appState.forms.knowledgeCheckQ2.question2) {
          this.router.navigate([`/${isaRoutesNames.KNOWLEDGE_CHECK_Q1}`]);
        }

        if (appState.forms.knowledgeCheckQ2.question2 === 'No') {
          window.open(
            this.configService.content.endPoints.knowledgecheckFailurePage,
            '_self'
          );
        }

        return true;
      })
    );
  }
}
