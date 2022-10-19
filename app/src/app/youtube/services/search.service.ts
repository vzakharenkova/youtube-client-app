import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, catchError, retry, throwError } from 'rxjs';
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
    apiKey: 'AIzaSyA6gDy7eIZRXroodDNUz6EKq_yd0tQiIAk',
    maxResult: 20,
  };

  public getVideos(searchTerm: string) {
    const urlParams = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', this.httpConfig.maxResult)
      .set('q', searchTerm)
      .set('key', this.httpConfig.apiKey);
    const options = {
      params: urlParams,
    };
    this.http
      .get<SearchResponse>(this.httpConfig.baseSearchUrl, options)
      .pipe(retry(3), catchError(this.handleError))
      .subscribe((data) => {
        const ids = (<SearchItem[]>data.items).map((item) => item.id.videoId).join(',');
        this.getVideoById(ids)
          .pipe(retry(3), catchError(this.handleError))
          .subscribe((videos) => {
            this.changeVideos(<VideoItem[]>videos.items);
          });
      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  public getVideoById(id: string) {
    const urlParamsStat = new HttpParams()
      .set('part', 'snippet,statistics')
      .set('id', id)
      .set('key', this.httpConfig.apiKey);
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
