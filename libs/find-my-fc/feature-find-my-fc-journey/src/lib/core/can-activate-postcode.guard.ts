import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Observable } from 'rxjs';

import { routesNames } from '@wesleyan-frontend/find-my-fc/util-const';

import { AppForms } from '../shared/app-forms.interface';

@Injectable()
export class CanActivatePostcode implements CanActivate {
  constructor(
    private router: Router,
    private formsManager: NgFormsManager<AppForms>
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const selectedProfession =
      this.formsManager.hasControl('professionSelect') &&
      this.formsManager.getControl('professionSelect', 'sector').value;

    return !selectedProfession
      ? this.router.parseUrl(`/${routesNames.PROFESSION_SELECT}`)
      : true;
  }
}
