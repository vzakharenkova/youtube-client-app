import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { SortingOrder, SortingType } from 'src/app/shared/models/shared.model';

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
  }

  public changeSortingCriteria(sortedBy: SortingType, sortingOrder: SortingOrder) {
    this.sortingOrder$.next(sortingOrder);
    this.sortedBy$.next(sortedBy);
  }
}
