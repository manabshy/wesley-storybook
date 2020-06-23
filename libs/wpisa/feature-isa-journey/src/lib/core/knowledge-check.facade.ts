import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';

import { ISAApiService } from '@wesleyan-frontend/wpisa/data-access';
import { isaRoutesNames } from '../isa-journey.routes.names';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KnowledgeCheckFacade {
  knowledgeCheckAttemptId: number;

  constructor(private isaApiService: ISAApiService) {}

  submitQuestion1(answer: string) {
    return this.isaApiService
      .submitInitialAnswer({
        questionIndex: 1,
        answer,
      })
      .pipe(
        tap(
          (response) => (this.knowledgeCheckAttemptId = response.data.attemptId)
        ),
        catchError((err) => {
          window.open(`${isaRoutesNames.KNOWLEDGE_CHECK_ERROR}`, '_self');

          return throwError(err);
        })
      );
  }

  submitQuestion2(answer: string) {
    return this.isaApiService
      .submitSubsequentAnswer({
        questionIndex: 2,
        answer,
        attemptId: this.knowledgeCheckAttemptId,
      })
      .pipe(
        catchError((err) => {
          window.open(`${isaRoutesNames.KNOWLEDGE_CHECK_ERROR}`, '_self');

          return throwError(err);
        })
      );
  }
}
