import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';

import { KnowledgeCheckService } from '@wesleyan-frontend/wpisa/data-access';
import { isaRoutesNames } from '../isa-journey.routes.names';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KnowledgeCheckFacade {
  private knowledgeCheckAttemptId: string;

  constructor(private knowledgeCheckService: KnowledgeCheckService) {}

  submitQuestion(questionIndex: number, answer: string) {
    return this.knowledgeCheckService
      .submitAnswer({
        questionIndex,
        answer,
        attemptId: this.knowledgeCheckAttemptId,
      })
      .pipe(
        tap(({ attemptId }) => (this.knowledgeCheckAttemptId = attemptId)),
        catchError((err) => {
          window.open(`${isaRoutesNames.KNOWLEDGE_CHECK_ERROR}`, '_self');

          return throwError(err);
        })
      );
  }
}
