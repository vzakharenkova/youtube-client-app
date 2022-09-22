import { SearchItem } from './search-item.model';

export interface SearchResponce {
  kind: 'youtube#videoListResponse';
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchItem[];
}
