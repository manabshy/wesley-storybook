import { Component, OnInit, Input  } from '@angular/core';
import { ConfigService, Config, Article, Title } from '@wesleyan-frontend/dashboard-help-and-support/data-access';
@Component({
  selector: 'wes-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Input() config: Config;
  constructor() { }

  ngOnInit(): void {
  }

}
