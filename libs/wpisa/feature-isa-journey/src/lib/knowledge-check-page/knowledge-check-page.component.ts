import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFormsManager } from '@ngneat/forms-manager';

import {
  ConfigService,
  Config,
  KnowledgeCheckService,
} from '@wesleyan-frontend/wpisa/data-access';
import { CustomStepperComponent } from '../components/custom-stepper/custom-stepper.component';
import { Router } from '@angular/router';
import { KnowledgeCheckFacade } from '../core/knowledge-check.facade';
import { isaRoutesNames } from '../isa-journey.routes.names';
import {
  take,
  filter,
  switchMapTo,
  tap,
  finalize,
  takeWhile,
  switchMap,
} from 'rxjs/operators';

@Component({
  selector: 'wes-knowledge-check-page',
  templateUrl: './knowledge-check-page.component.html',
  styleUrls: ['./knowledge-check-page.component.scss'],
})
export class KnowledgeCheckPageComponent implements OnInit {
  @ViewChild('stepper') stepper: CustomStepperComponent;

  pageContent: Config;

  knowledgeCheckQ1Control;
  knowledgeCheckQ2Control;

  q1Valid$ = this.formsManager.validityChanges('knowledgeCheckQ1');
  q2Valid$ = this.formsManager.validityChanges('knowledgeCheckQ2');

  constructor(
    private configService: ConfigService,
    private knowledgeCheckFacade: KnowledgeCheckFacade,
    private router: Router,
    private formsManager: NgFormsManager
  ) {
    this.pageContent = this.configService.content;
  }

  ngOnInit(): void {}

  submitQuestion1() {
    const q1Value = this.formsManager.getControl<string>(
      'knowledgeCheckQ1',
      'question1'
    ).value;

    this.formsManager
      .initialValueChanged('knowledgeCheckQ1')
      .pipe(
        // takeWhile complete an observable when a condition fails
        takeWhile((hasChanged) => hasChanged === true),
        switchMap(() =>
          this.knowledgeCheckFacade.submitQuestion(0, q1Value).pipe(
            tap((_) =>
              this.formsManager.setInitialValue('knowledgeCheckQ1', {
                question1: q1Value,
              })
            )
          )
        ),
        //Show Question2
        finalize(() => this.stepper.next()),
        take(1)
      )
      .subscribe();
  }

  submitQuestion2() {
    const q2Value = this.formsManager.getControl<string>(
      'knowledgeCheckQ2',
      'question2'
    ).value;

    this.formsManager
      .initialValueChanged('knowledgeCheckQ2')
      .pipe(
        // takeWhile complete an observable when a condition fails
        takeWhile((hasChanged) => hasChanged === true),
        switchMap(() =>
          this.knowledgeCheckFacade.submitQuestion(1, q2Value).pipe(
            tap((_) =>
              this.formsManager.setInitialValue('knowledgeCheckQ2', {
                question2: q2Value,
              })
            )
          )
        ),
        finalize(() =>
          this.router.navigate([`/${isaRoutesNames.YOUR_DETAILS}`])
        ),
        take(1)
      )
      .subscribe();
  }
}
