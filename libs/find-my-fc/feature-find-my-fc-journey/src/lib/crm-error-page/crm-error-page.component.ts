import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
  ConfigService,
  ExceptionContent,
} from '@wesleyan-frontend/find-my-fc/data-access';

@Component({
  selector: 'wes-crm-error-page',
  templateUrl: './crm-error-page.component.html',
  styleUrls: ['./crm-error-page.component.scss'],
})
export class CRMErrorPageComponent {
  content: ExceptionContent;

  constructor(
    private configService: ConfigService,
    private titleService: Title
  ) {
    this.content = this.configService.content.exception;
    this.titleService.setTitle(this.configService.content.exception.metaTitle);
  }
}
