import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnDestroy,
  AfterContentInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { Config } from '@wesleyan-frontend/dashboard-help-and-support/data-access';

import { transformToUrlFormat } from '../shared/utils';

@Component({
  selector: 'wes-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {
  @Input() config: Config;

  subscriptions$ = new Subscription();
  activeTabFromUrl$: Observable<string>;
  activeTabIndex$: Observable<number>;
  tabsTitle = ['general', 'policies', 'myprofile', 'glossary'];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.tabsTitle = this.config.data.sections.map((section) => section.href);
  }

  ngAfterContentInit() {
    this.activeTabIndex$ = this.route.queryParamMap.pipe(
      map((params) => params.get('section')),
      map(
        (section) =>
          section
            ? this.tabsTitle.indexOf(section)
            : 0.5 /*to force tab indexChange to fire on page load for index 0*/
      )
    );
  }

  onTabIndexChanged(index: number) {
    this.updateSectionInUrl(index);
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

  tabClicked() {
    this.removeArticleFromUrl();
  }

  transform(value: string): string {
    return transformToUrlFormat(value);
  }

  updateSectionInUrl(index: number) {
    const urlTree = this.router.createUrlTree([], {
      queryParams: { section: this.tabsTitle[index] },
      queryParamsHandling: 'merge',
    });

    this.router.navigateByUrl(urlTree);
  }

  removeArticleFromUrl() {
    const urlTree = this.router.createUrlTree([], {
      queryParams: { article: null },
      queryParamsHandling: 'merge',
    });

    this.router.navigateByUrl(urlTree);
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
