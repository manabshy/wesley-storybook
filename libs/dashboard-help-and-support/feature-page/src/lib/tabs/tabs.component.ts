import { Component, OnInit, Input } from '@angular/core';
import { ConfigService, Config } from '@wesleyan-frontend/dashboard-help-and-support/data-access';

@Component({
  selector: 'wes-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() config: Config;
  constructor() { }

  ngOnInit(): void {
  }
  transform(value: string): string {
    return value? value.split(' ').join('_').replace('?','') : value;
  } 
}
