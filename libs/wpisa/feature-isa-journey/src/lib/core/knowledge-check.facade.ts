import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { ISAApiService } from '@wesleyan-frontend/wpisa/data-access';
import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';

import { isaRoutesNames } from '../isa-journey.routes.names';

@Injectable({
  providedIn: 'root',
})
export class KnowledgeCheckFacade {
  knowledgeCheckAttemptId: number;

  constructor(
    private isaApiService: ISAApiService,
    private loadingService: OverlayProgressSpinnerService
  ) {}

  submitQuestion1(answer: string) {
    this.loadingService.show();

    return this.isaApiService
      .submitInitialAnswer({
        questionIndex: 1,
        answer,
      })
      .pipe(
        tap((_) => this.loadingService.hide()),
        tap(
          (response) => (this.knowledgeCheckAttemptId = response.data.attemptId)
        ),
        catchError((err) => {
          window.open(`/${isaRoutesNames.KNOWLEDGE_CHECK_ERROR}`, '_self');

          return throwError(err);
        })
      );
  }

  submitQuestion2(answer: string) {
    this.loadingService.show();

    return this.isaApiService
      .submitSubsequentAnswer({
        questionIndex: 2,
        answer,
        attemptId: this.knowledgeCheckAttemptId,
      })
      .pipe(
        tap((_) => this.loadingService.hide()),
        catchError((err) => {
          window.open(`/${isaRoutesNames.KNOWLEDGE_CHECK_ERROR}`, '_self');

          return throwError(err);
        })
      );
  }
}
