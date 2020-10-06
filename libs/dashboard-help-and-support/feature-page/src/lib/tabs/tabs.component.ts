import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map, pairwise, take, tap } from 'rxjs/operators';

import {
  Config,
  Article,
} from '@wesleyan-frontend/dashboard-help-and-support/data-access';

@Component({
  selector: 'wes-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() config: Config;

  subscriptions$ = new Subscription();
  articles: Article[];
  activeTabFromUrl$: Observable<string>;
  activeTabIndex$: Observable<number>;
  removeArticleFromUrlWhenSwitchingTabs: Observable<any>;
  tabsTitle = ['general', 'policies', 'myprofile', 'glossary'];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.tabsTitle = this.config.data.sections.map((section) =>
      section.href.substring(1)
    );

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
      map((section) => (section ? this.tabsTitle.indexOf(section) : null))
    );

    this.removeArticleFromUrlWhenSwitchingTabs = this.route.queryParamMap.pipe(
      pairwise(),
      filter(
        ([previousValue, currentValue]) =>
          previousValue.get('section') &&
          currentValue.get('section') !== previousValue.get('section')
      ),
      filter(([previousValue, currentValue]) => !!currentValue.get('article')),
      tap(([previousValue, currentValue]) => {
        const urlTree = this.router.createUrlTree([], {
          queryParams: { article: null },
          queryParamsHandling: 'merge',
        });

        this.router.navigateByUrl(urlTree);
      })
    );

    this.subscriptions$.add(
      this.removeArticleFromUrlWhenSwitchingTabs.subscribe()
    );
  }

  onTabIndexChanged(index: number) {
    const urlTree = this.router.createUrlTree([], {
      queryParams: { section: this.tabsTitle[index] },
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

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
