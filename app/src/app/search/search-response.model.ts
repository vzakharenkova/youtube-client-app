import { SearchItem } from './search-item.model';

export interface SearchResponce {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchItem[];
}
