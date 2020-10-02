import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
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
  @Input() showPanel = false;
  @Input() results: SearchResults;
  @Output() resultSelected = new EventEmitter<any>();

  onArticleClicked() {
    this.resultSelected.emit();
  }
  removeTags(text: string) {
    return text.replace(/(<([^>]+)>)/gi, '').replace(/&nbsp;/g, '');
  }

  truncatedContent(text: string) {
    return truncate(text, {
      length: 200,
      separator: ' ',
    });
  }

  transform(value: string): string {
    return value.split(' ').join('_').replace('?', '').toLowerCase();
  }
}
