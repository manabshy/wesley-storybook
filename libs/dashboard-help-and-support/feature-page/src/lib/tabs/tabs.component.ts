import { DOCUMENT } from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  Inject,
  Optional,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Config,
  Article,
} from '@wesleyan-frontend/dashboard-help-and-support/data-access';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'wes-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsComponent implements OnInit, AfterViewInit {
  @Input() config: Config;
  articles: Article[];
  activeTabFromUrl$: Observable<string>;
  activeTabIndex$: Observable<number>;
  tabs = {
    general: 0,
    policies: 1,
    myprofile: 2,
    glossary: 3,
    list: ['general', 'policies', 'myprofile', 'glossary'],
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const groupsDict = this.config.data.sections.reduce((acc, cur) => {
      cur.articles.forEach(({ title }) => {
        acc[title] = acc[title] || { title };
        acc[title].items = acc[title].items || [];
        acc[title].items.push({ id: cur.dataGtmId, title: cur.title });
      });
      return acc;
    }, {});

    this.articles = Object.keys(groupsDict).map((x) => groupsDict[x]);
  }

  ngAfterViewInit() {
    this.activeTabIndex$ = this.route.queryParamMap.pipe(
      map((params) => params.get('section')),
      map((section) => (section ? this.tabs[section] : null))
    );
  }

  onTabIndexChanged(index: number) {
    const urlTree = this.router.createUrlTree([], {
      queryParams: { section: this.tabs.list[index] },
      queryParamsHandling: 'merge',
    });

    this.router.navigateByUrl(urlTree);
  }

  onTabChanged(e) {
    this.route.queryParamMap
      .pipe(
        map((params) => params.get('article')),
        map((article) => document.getElementById(article)),
        tap((element) => {
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest',
            });
          }
        }),
        take(1)
      )
      .subscribe();
  }

  transform(value: string): string {
    return value.split(' ').join('_').replace('?', '').toLowerCase();
  }
}
