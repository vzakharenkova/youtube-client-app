import { SearchItem } from './search-item.model';
import { VideoItem } from './video-item.model';

export interface SearchResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  regionCode?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchItem[] | VideoItem[];
}
