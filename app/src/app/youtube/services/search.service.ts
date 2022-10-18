import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { SearchResponse } from 'src/app/shared/models/search-response.model';
import { SortingOrder, SortingType } from 'src/app/shared/models/shared.model';
import { VideoItem } from 'src/app/shared/models/video-item.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  public videos$ = new BehaviorSubject<VideoItem[]>([]);

  public sortTerm$ = new BehaviorSubject<string>('');

  public sortingOrder$ = new BehaviorSubject<SortingOrder | null>(null);

  public sortedBy$ = new BehaviorSubject<SortingType | null>(null);

  private baseSearchUrl = 'https://youtube.googleapis.com/youtube/v3/search';

  private baseVideoUrl = 'https://youtube.googleapis.com/youtube/v3/videos';

  private apiKey = 'AIzaSyA6gDy7eIZRXroodDNUz6EKq_yd0tQiIAk';

  private maxResult = 15;

  public getVideos(searchTerm: string) {
    const urlParams = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', this.maxResult)
      .set('q', searchTerm)
      .set('key', this.apiKey);
    const options = {
      params: urlParams,
    };
    this.http.get<SearchResponse>(this.baseSearchUrl, options).subscribe((data) => {
      const ids = (<SearchItem[]>data.items).map((item) => item.id.videoId).join(',');
      const urlParamsStat = new HttpParams()
        .set('part', 'snippet,statistics')
        .set('id', ids)
        .set('key', this.apiKey);
      const optionsStat = {
        params: urlParamsStat,
      };
      this.http.get<SearchResponse>(this.baseVideoUrl, optionsStat).subscribe((videos) => {
        this.changeVideos(<VideoItem[]>videos.items);
      });
    });
  }

  public getVideoById(id: string) {
    const urlParamsStat = new HttpParams()
      .set('part', 'snippet,statistics')
      .set('id', id)
      .set('key', this.apiKey);
    const optionsStat = {
      params: urlParamsStat,
    };

    return this.http.get<SearchResponse>(this.baseVideoUrl, optionsStat);
  }

  public changeVideos(videos: VideoItem[]) {
    this.videos$.next(videos);
  }

  public changeSortTerm(sortTerm: string) {
    this.sortTerm$.next(sortTerm);
  }

  public changeSortingCriteria(sortedBy: SortingType, sortingOrder: SortingOrder) {
    this.sortingOrder$.next(sortingOrder);
    this.sortedBy$.next(sortedBy);
  }
}
