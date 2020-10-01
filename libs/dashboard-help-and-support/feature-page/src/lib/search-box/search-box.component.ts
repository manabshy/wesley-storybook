import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  shareReplay,
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
  showPanel = false;
  hasResults = false;
  filteredSuggestions;

  searchInput$: Observable<string>;
  searchResults$: Observable<SearchResults>;
  hasResults$: Observable<boolean>;

  ngAfterViewInit() {
    this.searchInput$ = fromEvent(this.userInput.nativeElement, 'keyup').pipe(
      map((e) => this.userInput.nativeElement.value),
      debounceTime(300),
      distinctUntilChanged()
    );

    this.searchResults$ = this.searchInput$.pipe(
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
