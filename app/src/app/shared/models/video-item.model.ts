import { Thumbnails } from './shared.model';

export interface VideoItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: VideoStatistic;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

interface VideoStatistic {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
