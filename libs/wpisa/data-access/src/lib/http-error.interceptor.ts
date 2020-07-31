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

import { ConfigService } from './config.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private configService: ConfigService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          window.open(
            this.configService.content.endPoints.formUnavailablePage,
            '_self'
          );
        }
        return throwError(error);
      })
    );
  }
}
