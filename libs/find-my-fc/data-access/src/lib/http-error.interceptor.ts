import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { routesNames } from '@wesleyan-frontend/find-my-fc/util-const';

import { ConfigService } from './config.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private configService: ConfigService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          this.router.navigate([routesNames.CRM_ERROR]);
        }
        return throwError(error);
      })
    );
  }
}
