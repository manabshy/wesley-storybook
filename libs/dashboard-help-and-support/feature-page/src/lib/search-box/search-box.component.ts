import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { camelCase, snakeCase, flatten } from 'lodash';
import Fuse from 'fuse.js';

import {
  ConfigService,
  Config,
  Article,
  Title,
} from '@wesleyan-frontend/dashboard-help-and-support/data-access';
import { fromEvent, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  mapTo,
  shareReplay,
  tap,
} from 'rxjs/operators';
import { SearchResults } from '../shared/search-result.interface';
@Component({
  selector: 'wes-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit, AfterViewInit {
  @Input() config: Config;
  @ViewChild('searchInput') userInput: ElementRef;

  fuseOptions = {
    threshold: 0,
    location: 0,
    distance: 1000,
    tokenize: true,
    matchAllTokens: true,
    maxPatternLength: 32,
    minMatchCharLength: 3,
    keys: ['title', 'content'],
  };
  showPanel = false;
  hasResults = false;
  filteredSuggestions;

  searchInput$: Observable<string>;
  searchResults$: Observable<SearchResults>;
  hasResults$: Observable<boolean>;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.searchInput$ = fromEvent(this.userInput.nativeElement, 'keyup').pipe(
      map((e) => this.userInput.nativeElement.value),
      debounceTime(300),
      distinctUntilChanged()
    );

    this.searchResults$ = this.searchInput$.pipe(
      filter(
        (searchTerm) => searchTerm.length >= this.fuseOptions.minMatchCharLength
      ),
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

    this.searchResults$.subscribe(console.log);
  }

  fetchResults(searchTerm: string) {
    return this.config.data.sections.map((section) => {
      const fuse = new Fuse(section.articles, this.fuseOptions);
      return {
        title: section.title,
        href: section.href,
        articles: fuse.search(searchTerm.toLowerCase()),
      };
    });
  }
}
