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
  selector: 'wes-knowledge-check-q1-page',
  templateUrl: './knowledge-check-q1-page.component.html',
  styleUrls: ['./knowledge-check-q1-page.component.scss'],
})
export class KnowledgeCheckQ1PageComponent implements OnInit {
  pageContent: Config;

  q1Valid$ = this.formsManager.validityChanges('knowledgeCheckQ1');

  constructor(
    private configService: ConfigService,
    private knowledgeCheckFacade: KnowledgeCheckFacade,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title
  ) {
    this.pageContent = this.configService.content;
    console.log(this.pageContent);

    this.titleService.setTitle(this.pageContent.knowledgeCheck.step1.metaTitle);
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
        switchMap(() =>
          this.knowledgeCheckFacade.submitQuestion1(q1Value).pipe(
            tap((_) =>
              this.formsManager.setInitialValue('knowledgeCheckQ1', {
                question1: q1Value,
              })
            )
          )
        ),
        //Show Question2
        finalize(() =>
          this.router.navigate([`/${isaRoutesNames.KNOWLEDGE_CHECK_Q2}`])
        ),
        take(1)
      )
      .subscribe();
  }
}
