import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { isEmpty } from 'ramda';

import { ConfigService } from '@wesleyan-frontend/wpisa/data-access';

import { AppStateFacade } from './services/app-state-facade';

@Injectable({
  providedIn: 'root',
})
export class FormDataGuard implements CanActivate {
  constructor(
    private appStateFacade: AppStateFacade,
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
    const appState = this.appStateFacade.state;

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
  }
}
