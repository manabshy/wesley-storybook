import { Injectable } from '@angular/core';
import { tap, catchError, take, concatMapTo } from 'rxjs/operators';
import { throwError } from 'rxjs';

import {
  ISAApiService,
  SessionStorageService,
} from '@wesleyan-frontend/wpisa/data-access';
import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';

import { isaRoutesNames } from '../isa-journey.routes.names';
import { AppStateFacade } from './app-state-facade';
import { NgFormsManager, NgFormsManagerConfig } from '@ngneat/forms-manager';
import { AppForms } from './app-forms.interface';

@Injectable({
  providedIn: 'root',
})
export class KnowledgeCheckFacade {
  knowledgeCheckAttemptId: number;

  constructor(
    private isaApiService: ISAApiService,
    private appState: AppStateFacade,
    private loadingService: OverlayProgressSpinnerService,
    private formManager: NgFormsManager<AppForms>
  ) {
    this.knowledgeCheckAttemptId = this.appState.state.attemptId;
  }

  submitQuestion1(answerLabel: string, questionText: string) {
    this.loadingService.show();

    const q1Value = this.formManager.getControl('knowledgeCheckQ1', 'question1')
      .value;

    const kcAnswers = {
      forms: {
        knowledgeCheckQ1: { question1: q1Value },
        knowledgeCheckQ2: { question2: null }, //Reset question 2
      },
    };

    return this.appState.save(kcAnswers).pipe(
      concatMapTo(
        this.isaApiService
          .submitInitialAnswer({
            questionIndex: 1,
            questionText,
            answerText: answerLabel,
          })
          .pipe(
            tap((_) => this.loadingService.hide()),
            tap(
              (response) =>
                (this.knowledgeCheckAttemptId = response.data.attemptId)
            ),
            catchError((err) => {
              window.open(`/${isaRoutesNames.KNOWLEDGE_CHECK_ERROR}`, '_self');

              return throwError(err);
            })
          )
      )
    );
  }

  submitQuestion2(answerLabel: string, questionText: string) {
    this.loadingService.show();

    return this.appState.saveFormState('knowledgeCheckQ2').pipe(
      concatMapTo(
        this.isaApiService
          .submitSubsequentAnswer({
            questionIndex: 2,
            questionText,
            answerText: answerLabel,
            attemptId: this.knowledgeCheckAttemptId,
          })
          .pipe(
            tap((_) => this.loadingService.hide()),
            catchError((err) => {
              window.open(`/${isaRoutesNames.KNOWLEDGE_CHECK_ERROR}`, '_self');

              return throwError(err);
            })
          )
      )
    );
  }
}
