import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, retry } from 'rxjs';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { SearchResponse } from 'src/app/shared/models/search-response.model';
import { SortingOrder, SortingType } from 'src/app/shared/models/shared.model';
import { VideoItem } from 'src/app/shared/models/video-item.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  public searchTerm$ = new BehaviorSubject<string>('');

  public videos$ = new BehaviorSubject<VideoItem[]>([]);

  public sortTerm$ = new BehaviorSubject<string>('');

  public sortingOrder$ = new BehaviorSubject<SortingOrder | null>(null);

  public sortedBy$ = new BehaviorSubject<SortingType | null>(null);

  private httpConfig = {
    baseSearchUrl: 'https://youtube.googleapis.com/youtube/v3/search',
    baseVideoUrl: 'https://youtube.googleapis.com/youtube/v3/videos',
    apiKey: 'AIzaSyBfCoKD_ej28KSsNdQUqxxxJJ7MnUh5iyc',
    maxResult: 20,
  };

  public getHttpConfig() {
    return this.httpConfig;
  }

  public getVideos(searchTerm: string) {
    const urlParams = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', this.httpConfig.maxResult)
      .set('q', searchTerm);
    const options = {
      params: urlParams,
    };
    this.http
      .get<SearchResponse>(this.httpConfig.baseSearchUrl, options)
      .pipe(retry(3))
      .subscribe((data) => {
        const ids = (<SearchItem[]>data.items).map((item) => item.id.videoId).join(',');
        this.getVideoById(ids)
          .pipe(retry(3))
          .subscribe((videos) => {
            this.changeVideos(<VideoItem[]>videos.items);
          });
      });
  }

  public getVideoById(id: string) {
    const urlParamsStat = new HttpParams().set('part', 'snippet,statistics').set('id', id);
    const optionsStat = {
      params: urlParamsStat,
    };

    return this.http.get<SearchResponse>(this.httpConfig.baseVideoUrl, optionsStat);
  }

  public changeSearchTerm(term: string) {
    this.searchTerm$.next(term);
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
