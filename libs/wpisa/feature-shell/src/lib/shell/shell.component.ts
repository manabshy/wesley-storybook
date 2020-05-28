import { Component, OnInit } from '@angular/core';
import { ConfigService } from '@wesleyan-frontend/wpisa/data-access';

@Component({
  selector: 'wes-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  data;
  constructor(private configService: ConfigService) {
    // this.title = this.configService.content.pageTitle;
    this.data = this.configService.content;
  }
}
