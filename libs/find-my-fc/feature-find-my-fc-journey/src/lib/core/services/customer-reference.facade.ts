import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { tap, take, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

import {
  ConfigService,
  FindFCApiService,
} from '@wesleyan-frontend/find-my-fc/data-access';
import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';

import { routesNames } from '../../find-my-fc-journey.routes.names';

@Injectable({
  providedIn: 'root',
})
export class CustomerReferenceFacade {
  private invalidCustomerReferenceCount = 0;
  private invalidCustomerReference$$ = new Subject<boolean>();

  invalidCustomerReference$ = this.invalidCustomerReference$$.asObservable();

  constructor(
    private configService: ConfigService,
    private findFinancialConsultantService: FindFCApiService,
    private loadingService: OverlayProgressSpinnerService,
    private router: Router
  ) {}

  findFC(customerReference: string) {
    this.loadingService.show();

    this.findFinancialConsultantService
      .findByCustomerID(customerReference)
      .pipe(
        tap((_) => this.loadingService.hide()),
        // tap((response) => this.router.navigate(['/'])),
        take(1),
        catchError((err: HttpErrorResponse) => {
          this.loadingService.hide();
          this.handleError(err);

          return throwError(err);
        })
      )
      .subscribe();
  }

  private handleError(err: HttpErrorResponse) {
    const NO_FINANCIAL_CONSULTANT_FOUND = 404;

    if (err.status === NO_FINANCIAL_CONSULTANT_FOUND) {
      this.invalidCustomerReference$$.next(true);
      this.invalidCustomerReferenceCount++;
    }

    if (this.invalidCustomerReferenceCount === 3) {
      this.router.navigate([routesNames.CANNOT_FIND_CUSTOMER]);
    }
  }
}
