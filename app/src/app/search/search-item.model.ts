export interface SearchItem {
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
  thumbnails: {
    default: {
      url: string;
      width: 120;
      height: 90;
    };
    medium: {
      url: string;
      width: 320;
      height: 180;
    };
    high: {
      url: string;
      width: 480;
      height: 360;
    };
    standard: {
      url: string;
      width: 640;
      height: 480;
    };
    maxres: {
      url: string;
      width: 1280;
      height: 720;
    };
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
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
