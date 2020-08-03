import { take, tap, takeWhile, switchMap } from 'rxjs/operators';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigService, Config } from '@wesleyan-frontend/wpisa/data-access';

import { KnowledgeCheckFormAnswer } from '../core/models/knowledge-check-form-answer.interface';
import { KnowledgeCheckFacade } from '../core/services/knowledge-check.facade';
import { isaRoutesNames } from '../isa-journey.routes.names';

@Component({
  selector: 'wes-knowledge-check-q2-page',
  templateUrl: './knowledge-check-q2-page.component.html',
  styleUrls: ['./knowledge-check-q2-page.component.scss'],
})
export class KnowledgeCheckQ2PageComponent {
  pageContent: Config;
  question1Link = `/${isaRoutesNames.KNOWLEDGE_CHECK_Q1}`;
  q2Valid$ = this.formsManager.validityChanges('knowledgeCheckQ2');

  constructor(
    private configService: ConfigService,
    private knowledgeCheckFacade: KnowledgeCheckFacade,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title
  ) {
    this.pageContent = this.configService.content;

    this.titleService.setTitle(this.pageContent.knowledgeCheck.step2.metaTitle);
  }

  submitQuestion2(answer: KnowledgeCheckFormAnswer) {
    this.formsManager
      .initialValueChanged('knowledgeCheckQ2')
      .pipe(
        // We use takeWhile because it completes an observable when a condition fails
        takeWhile((hasChanged) => hasChanged === true),
        switchMap(() =>
          this.knowledgeCheckFacade.submitQuestion2(
            answer.value,
            answer.label,
            this.pageContent.knowledgeCheck.step2.summary
          )
        ),
        tap(() => this.router.navigate([`/${isaRoutesNames.YOUR_DETAILS}`])),
        take(1)
      )
      .subscribe();
  }
}
