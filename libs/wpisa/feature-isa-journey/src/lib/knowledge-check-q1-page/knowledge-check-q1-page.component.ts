import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs/operators';

import { ConfigService, Config } from '@wesleyan-frontend/wpisa/data-access';

import { KnowledgeCheckFormAnswer } from '../core/models/knowledge-check-form-answer.interface';
import { KnowledgeCheckFacade } from '../core/services/knowledge-check.facade';
import { isaRoutesNames } from '../isa-journey.routes.names';

@Component({
  selector: 'wes-knowledge-check-q1-page',
  templateUrl: './knowledge-check-q1-page.component.html',
  styleUrls: ['./knowledge-check-q1-page.component.scss'],
})
export class KnowledgeCheckQ1PageComponent {
  pageContent: Config;
  introLink = `/${isaRoutesNames.KNOWLEDGE_CHECK}`;
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

  submitQuestion1(answer: KnowledgeCheckFormAnswer) {
    this.knowledgeCheckFacade
      .submitQuestion1(
        answer.value,
        answer.label,
        this.pageContent.knowledgeCheck.step1.summary
      )
      .pipe(
        //Show Question2
        tap(() =>
          this.router.navigate([`/${isaRoutesNames.KNOWLEDGE_CHECK_Q2}`])
        ),
        take(1)
      )
      .subscribe();
  }
}
