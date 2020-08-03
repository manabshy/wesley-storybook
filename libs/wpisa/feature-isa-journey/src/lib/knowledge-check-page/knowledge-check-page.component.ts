import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgFormsManager } from '@ngneat/forms-manager';

import { ConfigService, Config } from '@wesleyan-frontend/wpisa/data-access';
import { KnowledgeCheckFacade } from '../core/services/knowledge-check.facade';
import { isaRoutesNames } from '../isa-journey.routes.names';

@Component({
  selector: 'wes-knowledge-check-page',
  templateUrl: './knowledge-check-page.component.html',
  styleUrls: ['./knowledge-check-page.component.scss'],
})
export class KnowledgeCheckPageComponent implements OnInit {
  pageContent: Config;

  constructor(
    private configService: ConfigService,
    private knowledgeCheckFacade: KnowledgeCheckFacade,
    private router: Router,
    private titleService: Title
  ) {
    this.pageContent = this.configService.content;

    this.titleService.setTitle(this.pageContent.intro.metaTitle);
  }

  ngOnInit(): void {}

  onNextClicked() {
    this.router.navigate([`/${isaRoutesNames.KNOWLEDGE_CHECK_Q1}`]);
  }
}
