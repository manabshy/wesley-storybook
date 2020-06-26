import { Injectable } from '@angular/core';
import { tap, catchError, take } from 'rxjs/operators';
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

  submitQuestion1(answer: string) {
    this.loadingService.show();

    this.appState.saveFormState('knowledgeCheckQ1').pipe(take(1)).subscribe();

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

    this.appState.saveFormState('knowledgeCheckQ2').pipe(take(1)).subscribe();

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
