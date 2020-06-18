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
  selector: 'wes-knowledge-check-q2-page',
  templateUrl: './knowledge-check-q2-page.component.html',
  styleUrls: ['./knowledge-check-q2-page.component.scss'],
})
export class KnowledgeCheckQ2PageComponent implements OnInit {
  pageContent: Config;

  q2Valid$ = this.formsManager.validityChanges('knowledgeCheckQ2');

  constructor(
    private configService: ConfigService,
    private knowledgeCheckFacade: KnowledgeCheckFacade,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title
  ) {
    this.pageContent = this.configService.content;
    console.log(this.pageContent);

    this.titleService.setTitle(this.pageContent.knowledgeCheck.step2.metaTitle);
  }

  ngOnInit(): void {}

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
          this.knowledgeCheckFacade.submitQuestion2(q2Value).pipe(
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
