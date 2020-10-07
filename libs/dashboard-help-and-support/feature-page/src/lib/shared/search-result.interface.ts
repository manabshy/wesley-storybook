import Fuse from 'fuse.js';

import { Article } from '@wesleyan-frontend/dashboard-help-and-support/data-access';

export interface SearchResultSection {
  title: string;
  href: string;
  articles: Fuse.FuseResult<Article>[];
}
export type SearchResults = SearchResultSection[];
