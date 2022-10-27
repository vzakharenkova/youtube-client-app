import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectSearchResult } from 'src/app/redux/selectors/app.selectors';
import { VideoListStateModel } from 'src/app/redux/state.models';
import { VideoItem } from 'src/app/shared/models/video-item.model';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  videoResult: Observable<VideoItem[]> = this.store.select(selectSearchResult).pipe(
    map((videos) =>
      this.filter.transform(videos, {
        term: this.searchService.sortTerm$.getValue(),
        sortingType: this.searchService.sortedBy$.getValue(),
        sortingOrder: this.searchService.sortingOrder$.getValue(),
      }),
    ),
  );

  constructor(
    private readonly searchService: SearchService,
    private filter: FilterPipe,
    private store: Store<VideoListStateModel>,
  ) {}

  ngOnInit(): void {}

  public identify(_index: number, item: VideoItem) {
    return item.id;
  }
}
