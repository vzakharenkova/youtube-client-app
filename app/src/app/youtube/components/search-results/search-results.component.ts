import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { VideoItem } from 'src/app/shared/models/video-item.model';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  constructor(private readonly searchService: SearchService, private filter: FilterPipe) {}

  public videoResult: Observable<VideoItem[]> = this.searchService.videos$.pipe(
    map((videos) =>
      this.filter.transform(videos, {
        term: this.searchService.sortTerm$.getValue(),
        sortingType: this.searchService.sortedBy$.getValue(),
        sortingOrder: this.searchService.sortingOrder$.getValue(),
      }),
    ),
  );

  public identify(_index: number, item: VideoItem) {
    return item.id;
  }
}
