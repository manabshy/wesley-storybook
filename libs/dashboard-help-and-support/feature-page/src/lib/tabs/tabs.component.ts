import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ConfigService, Config , Article } from '@wesleyan-frontend/dashboard-help-and-support/data-access';

@Component({
  selector: 'wes-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class TabsComponent implements OnInit {
  @Input() config: Config;
  articles: Article[];
  constructor() {
    
   }

  ngOnInit(): void {
    const groupsDict = this.config.data.sections.reduce((acc, cur) => {
      cur.articles.forEach(({ title}) => {
        acc[title] = acc[title] || { title };
        acc[title].items = acc[title].items || [];
        acc[title].items.push({ id: cur.dataGtmId, title: cur.title });
      });
      return acc;
    }, {});

    this.articles = Object.keys(groupsDict).map(x => groupsDict[x]);
  }
  transform(value: string): string {
    return value? value.split(' ').join('_').replace('?','') : value;
  } 

  
}
