import { tap, catchError, concatMapTo, concatMap } from 'rxjs/operators';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';
import { ISAApiService } from '@wesleyan-frontend/wpisa/data-access';

import { isaRoutesNames } from '../../isa-journey.routes.names';
import { AppForms } from '../models/app-forms.interface';
import { AppStateFacade } from './app-state-facade';

@Injectable({
  providedIn: 'root',
})
export class KnowledgeCheckFacade {
  knowledgeCheckAttemptId: number;

  constructor(
    private isaApiService: ISAApiService,
    private appState: AppStateFacade,
    private loadingService: OverlayProgressSpinnerService
  ) {
    this.knowledgeCheckAttemptId = this.appState.state.attemptId;
  }

  submitQuestion1(
    answerValue: 'Yes' | 'No',
    answerLabel: string,
    questionText: string
  ) {
    this.loadingService.show();

    const kcAnswers = {
      forms: {
        knowledgeCheckQ1: { question1: answerValue },
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
            answerValue,
          })
          .pipe(
            tap(
              (response) =>
                (this.knowledgeCheckAttemptId = response.data.attemptId)
            ),
            concatMap((response) =>
              this.appState
                .save({ attemptId: response.data.attemptId })
                .pipe(tap((_) => this.loadingService.hide()))
            ),
            catchError((err) => {
              window.open(`/${isaRoutesNames.KNOWLEDGE_CHECK_ERROR}`, '_self');

              return throwError(err);
            })
          )
      )
    );
  }

  submitQuestion2(
    answerValue: 'Yes' | 'No',
    answerLabel: string,
    questionText: string
  ) {
    this.loadingService.show();

    return this.appState.saveFormState('knowledgeCheckQ2').pipe(
      concatMapTo(
        this.isaApiService
          .submitSubsequentAnswer({
            attemptId: this.knowledgeCheckAttemptId,
            questionIndex: 2,
            questionText,
            answerText: answerLabel,
            answerValue,
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
