import { Component } from '@angular/core';

import { ConfigService } from '@wesleyan-frontend/wpisa/data-access';

@Component({
  selector: 'wes-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'With Profit ISA';
  data;
  constructor(private configService: ConfigService) {
    this.title = this.configService.content.pageTitle;
    this.data = this.configService.content;
  }
}
