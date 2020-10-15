import { Component, OnInit } from '@angular/core';

import {
  ConfigService,
  ExceptionContent,
} from '@wesleyan-frontend/find-my-fc/data-access';

@Component({
  selector: 'wes-crm-error-page',
  templateUrl: './crm-error-page.component.html',
  styleUrls: ['./crm-error-page.component.scss'],
})
export class CRMErrorPageComponent implements OnInit {
  content: ExceptionContent;

  constructor(private configService: ConfigService) {
    this.content = this.configService.content.exception;
  }

  ngOnInit(): void {}
}
