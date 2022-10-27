import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { updateSearchResult } from 'src/app/redux/actions/app.actions';
import { selectSearchResult } from 'src/app/redux/selectors/app.selectors';
import { VideoListStateModel } from 'src/app/redux/state.models';
import { SortingType, SortingOrder } from 'src/app/shared/models/shared.model';
import { VideoItem } from 'src/app/shared/models/video-item.model';
import { FilterPipe } from 'src/app/youtube/pipes/filter.pipe';
import { SearchService } from 'src/app/youtube/services/search.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  currentVideoList: Observable<VideoItem[]> = this.store.select(selectSearchResult);

  public sortingTypeEnum = SortingType;

  private sortingOrder: SortingOrder | null = null;

  private sortingType: SortingType | null = null;

  public sortTerm!: string;

  constructor(
    private readonly searchService: SearchService,
    private store: Store<VideoListStateModel>,
    private filter: FilterPipe,
  ) {}

  ngOnInit(): void {
    // this.searchService.videos$.subscribe((videos) => (this.currentVideoList = videos));
  }

  public onSortClick(by: SortingType) {
    if (this.sortingType === null || this.sortingType !== by) {
      this.sortingOrder = SortingOrder.Up;
    } else if (this.sortingOrder === SortingOrder.Up) {
      this.sortingOrder = SortingOrder.Down;
    } else {
      this.sortingOrder = SortingOrder.Up;
    }
    this.sortingType = by;

    this.searchService.changeSortingCriteria(this.sortingType, this.sortingOrder);
    this.store.dispatch(
      updateSearchResult({
        searchResult: this.filter.transform(
          (this.store.select(selectSearchResult) as BehaviorSubject<VideoItem[]>).getValue(),
          {
            term: this.searchService.sortTerm$.getValue(),
            sortingType: this.searchService.sortedBy$.getValue(),
            sortingOrder: this.searchService.sortingOrder$.getValue(),
          },
        ),
      }),
    );
  }

  public onChange(str: string) {
    this.sortTerm = str;
    this.searchService.changeSortTerm(this.sortTerm);
    // this.store.dispatch(updateSearchResult({ searchResult: this.currentVideoList.pipe(map(d => )) }));
  }
}
