import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchItem } from '../models/search-item.model';
import { SortingType, SortingOrder } from '../models/shared.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public videos$ = new BehaviorSubject<SearchItem[]>([]);

  public sortTerm$ = new BehaviorSubject<string>('');

  public sortingOrder$ = new BehaviorSubject<SortingOrder | null>(null);

  public sortedBy$ = new BehaviorSubject<SortingType | null>(null);

  public changeVideos(videos: SearchItem[]) {
    this.videos$.next(videos);
  }

  public changeSortTerm(sortTerm: string) {
    this.sortTerm$.next(sortTerm);
    console.log(this.sortTerm$);
  }

  public changeSortingCriteria(sortedBy: SortingType, sortingOrder: SortingOrder) {
    this.sortingOrder$.next(sortingOrder);
    this.sortedBy$.next(sortedBy);
  }
}
