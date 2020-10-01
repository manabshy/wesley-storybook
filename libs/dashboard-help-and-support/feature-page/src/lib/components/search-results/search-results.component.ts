import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { truncate } from 'lodash';

import { Config } from '@wesleyan-frontend/dashboard-help-and-support/data-access';

import { SearchResults } from '../../shared/search-result.interface';

@Component({
  selector: 'wes-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
  @Input() searchTerm = '';
  @Input() hasResults = false;
  @Input() config: Config;
  @Input() set results(value: SearchResults) {
    this._results = value;
    this.showPanel = this.searchTerm?.length > 2;
  }

  _results: SearchResults;
  showPanel = false;

  removeTags(text: string) {
    return text.replace(/(<([^>]+)>)/gi, '').replace(/&nbsp;/g, '');
  }
  truncatedContent(text: string) {
    return truncate(text, {
      length: 200,
      separator: ' ',
    });
  }
}
