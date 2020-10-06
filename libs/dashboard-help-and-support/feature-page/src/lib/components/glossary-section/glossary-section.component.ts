import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { sortBy } from 'lodash';

import { Section } from '@wesleyan-frontend/dashboard-help-and-support/data-access';
import { transformToUrlFormat } from '../../shared/utils';

@Component({
  selector: 'wes-glossary-section',
  templateUrl: './glossary-section.component.html',
  styleUrls: ['./glossary-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlossarySectionComponent implements OnInit {
  @Input() section: Section;
  uniqueCharacters: string[];

  ngOnInit(): void {
    const alphabetiseArticles = sortBy(this.section.articles, 'title');
    const articleTitles = alphabetiseArticles.map((article) => article.title);
    const titlesFirstCharacters = articleTitles.map((x) => x[0]);
    this.uniqueCharacters = Array.from(new Set(titlesFirstCharacters));
  }

  transform(value: string): string {
    return transformToUrlFormat(value);
  }
}
