import { Component, OnInit } from '@angular/core';
import { ConfigService } from '@wesleyan-frontend/wpisa/data-access';

@Component({
  selector: 'wes-error-summary',
  templateUrl: './error-summary.component.html',
  styleUrls: ['./error-summary.component.scss'],
})
export class ErrorSummaryComponent implements OnInit {
  content;
  constructor(private configService: ConfigService) {
    this.content = this.configService.content.validationSummary;
  }

  ngOnInit(): void {}
}
