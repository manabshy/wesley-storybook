import { Injectable } from '@angular/core';
import { tap, take, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import {
  ConfigService,
  FindFCApiService,
} from '@wesleyan-frontend/find-my-fc/data-access';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';
import { routesNames } from '@wesleyan-frontend/find-my-fc/util-const';

const NO_FINANCIAL_CONSULTANT_FOUND = 404;

@Injectable({
  providedIn: 'root',
})
export class CustomerDetailsFacade {
  constructor(
    private configService: ConfigService,
    private loadingService: OverlayProgressSpinnerService,
    private findFinancialConsultantService: FindFCApiService,
    private router: Router
  ) {}

  findFC(dateOfBirth: string, emailAddress: string, postcode: string) {
    this.loadingService.show();

    this.findFinancialConsultantService
      .findByCustomerDetails(dateOfBirth, emailAddress, postcode)
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
    if (err.status === NO_FINANCIAL_CONSULTANT_FOUND) {
      this.router.navigate([routesNames.CANNOT_FIND_CUSTOMER]);
    }
  }
}
