import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, merge, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  mapTo,
  shareReplay,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { flatten } from 'lodash';
import Fuse from 'fuse.js';

import { Config } from '@wesleyan-frontend/dashboard-help-and-support/data-access';

import { SearchResults } from '../shared/search-result.interface';

@Component({
  selector: 'wes-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements AfterViewInit {
  @Input() config: Config;
  @ViewChild('searchInput') userInput: ElementRef;
  @ViewChild('background') background: ElementRef;

  fuseOptions = {
    threshold: 0.3,
    location: 0,
    distance: 1000,
    isCaseSensitive: false,
    ignoreLocation: false,
    minMatchCharLength: 3,
    findAllMatches: false,
    keys: [
      { name: 'content', weight: 1 },
      { name: 'title', weight: 2 },
    ],
  };

  backgroundClick$: Observable<false>;
  searchInput$: Observable<string>;
  searchQueryParam$: Observable<string>;
  searchTerm$: Observable<string>;
  searchResults$: Observable<SearchResults>;
  hasResults$: Observable<boolean>;
  showPanelBasedOnSearch$: Observable<boolean>;
  showPanel$: Observable<boolean>;

  constructor(private location: Location, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.backgroundClick$ = fromEvent(
      this.background.nativeElement,
      'click'
    ).pipe(mapTo(false));

    this.searchInput$ = fromEvent(this.userInput.nativeElement, 'keyup').pipe(
      map((e) => this.userInput.nativeElement.value),
      debounceTime(300),
      distinctUntilChanged()
    );

    this.searchQueryParam$ = this.route.queryParamMap.pipe(
      map((params) => params.get('search')),
      filter((value) => !!value)
    );

    this.searchTerm$ = merge(this.searchInput$, this.searchQueryParam$);

    this.searchResults$ = this.searchTerm$.pipe(
      map((searchTerm) => this.fetchResults(searchTerm)),
      shareReplay(1)
    );

    this.hasResults$ = this.searchResults$.pipe(
      map((results) => {
        const collectedArticles = results.map(({ articles }) => articles);
        const flattenedArticles = flatten(collectedArticles);

        return flattenedArticles.length !== 0;
      })
    );

    this.showPanelBasedOnSearch$ = this.searchResults$.pipe(
      withLatestFrom(this.searchTerm$),
      map(([_, searchTerm]) => searchTerm.length > 2)
    );

    this.showPanel$ = merge(
      this.showPanelBasedOnSearch$,
      this.backgroundClick$
    ).pipe(shareReplay(1));
  }

  fetchResults(searchTerm: string) {
    return this.config.data.sections.map((section) => {
      const fuse = new Fuse(section.articles, this.fuseOptions);
      return {
        title: section.title,
        href: section.href,
        articles: fuse.search(searchTerm),
      };
    });
  }
}
