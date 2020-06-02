import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { take, tap, finalize, takeWhile, switchMap } from 'rxjs/operators';
import { NgFormsManager } from '@ngneat/forms-manager';

import { ConfigService, Config } from '@wesleyan-frontend/wpisa/data-access';
import { KnowledgeCheckFacade } from '../core/knowledge-check.facade';
import { CustomStepperComponent } from '../components/custom-stepper/custom-stepper.component';
import { isaRoutesNames } from '../isa-journey.routes.names';

@Component({
  selector: 'wes-knowledge-check-page',
  templateUrl: './knowledge-check-page.component.html',
  styleUrls: ['./knowledge-check-page.component.scss'],
})
export class KnowledgeCheckPageComponent implements OnInit {
  @ViewChild('stepper') stepper: CustomStepperComponent;

  pageContent: Config;

  q1Valid$ = this.formsManager.validityChanges('knowledgeCheckQ1');
  q2Valid$ = this.formsManager.validityChanges('knowledgeCheckQ2');

  constructor(
    private configService: ConfigService,
    private knowledgeCheckFacade: KnowledgeCheckFacade,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title
  ) {
    this.pageContent = this.configService.content;

    console.warn('@TODO - set page title tag');
    this.titleService.setTitle(this.pageContent.start.pageTitle);
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
        // We use takeWhile because it completes an observable when a condition fails
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
        // We use takeWhile because it completes an observable when a condition fails
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
