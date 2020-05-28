import { Component, OnInit } from '@angular/core';

import { ConfigService, Config } from '@wesleyan-frontend/wpisa/data-access';

@Component({
  selector: 'wes-knowledge-check-page',
  templateUrl: './knowledge-check-page.component.html',
  styleUrls: ['./knowledge-check-page.component.scss'],
})
export class KnowledgeCheckPageComponent implements OnInit {
  pageData: Config;
  constructor(private configService: ConfigService) {
    this.pageData = this.configService.content;
  }

  ngOnInit(): void {}
}
