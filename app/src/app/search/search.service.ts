import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchItem } from '../models/search-item.model';
import { SortingBy, SortingOrder } from '../models/shared.model';
import { FilterPipe } from '../pipes/filter.pipe';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public videos$ = new BehaviorSubject<SearchItem[]>([]);

  public sortTerm$ = new BehaviorSubject<string>('');

  public sortingOrder$ = new BehaviorSubject<SortingOrder>(null);

  public sortedBy$ = new BehaviorSubject<SortingBy>(null);

  private initialVideos$ = new BehaviorSubject<SearchItem[]>([]);

  private filterPipe: FilterPipe = new FilterPipe();

  public changeVideos(videos: SearchItem[]) {
    this.initialVideos$.next(videos);
    console.log(videos);
    // this.videos$.next(
    //   this.filterPipe.transform(videos, [
    //     this.sortTerm$.getValue(),
    //     this.sortedBy$.getValue(),
    //     this.sortingOrder$.getValue(),
    //   ]),
    // );
    this.videos$.next(videos);
    // this.filterPipe.transform(videos, [this.sortTerm$.getValue(), this.sortedBy$.getValue(), this.sortingOrder$.getValue()])
  }

  public changeSortTerm(sortTerm: string) {
    this.sortTerm$.next(sortTerm);
    console.log(this.sortTerm$);
  }

  public changeSortingCriteria(sortedBy: SortingBy, sortingOrder: SortingOrder) {
    this.sortingOrder$.next(sortingOrder);
    this.sortedBy$.next(sortedBy);
  }
}
