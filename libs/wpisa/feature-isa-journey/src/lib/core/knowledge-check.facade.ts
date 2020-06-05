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
    console.log('submitting', questionIndex, answer);
    const attemptId = questionIndex === 1 ? null : this.knowledgeCheckAttemptId;

    return this.knowledgeCheckService
      .submitAnswer({
        questionText: 'test',
        questionIndex,
        answer,
        attemptId,
      })
      .pipe(
        tap((response) => (this.knowledgeCheckAttemptId = response.attemptId)),
        catchError((err) => {
          window.open(`${isaRoutesNames.KNOWLEDGE_CHECK_ERROR}`, '_self');

          return throwError(err);
        })
      );
  }
}
