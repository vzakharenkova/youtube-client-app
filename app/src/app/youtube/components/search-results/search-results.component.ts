import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectSearchResult } from 'src/app/redux/selectors/app.selectors';
import { VideoListStateModel } from 'src/app/redux/state.models';
import { SortingCriteria } from 'src/app/shared/models/shared.model';
import { VideoItem } from 'src/app/shared/models/video-item.model';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  public isLoading = this.searchService.isLoading$;

  public filterCriteria!: SortingCriteria;

  public videoResult!: VideoItem[];

  private videoSubscribtion!: Subscription;

  private filterSubscribtion!: Subscription;

  constructor(
    private readonly searchService: SearchService,
    public filter: FilterPipe,
    private store: Store<VideoListStateModel>,
  ) {}

  ngOnInit(): void {
    this.filterSubscribtion = this.searchService.filterProps$.subscribe(
      (props) => (this.filterCriteria = props),
    );
    this.videoSubscribtion = this.store
      .select(selectSearchResult)
      .subscribe((videos) => (this.videoResult = videos));
  }

  ngOnDestroy(): void {
    this.videoSubscribtion.unsubscribe();
    this.filterSubscribtion.unsubscribe();
  }

  public identify(_index: number, item: VideoItem) {
    return item.id;
  }
}
