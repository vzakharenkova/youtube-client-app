import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  videoResult: SearchItem[] = [];

  constructor(private readonly searchService: SearchService, private filter: FilterPipe) {}

  ngOnInit(): void {
    this.searchService.videos$.subscribe(
      (videos) =>
        (this.videoResult = this.filter.transform(videos, {
          term: this.searchService.sortTerm$.getValue(),
          sortingBy: this.searchService.sortedBy$.getValue(),
          sortingOrder: this.searchService.sortingOrder$.getValue(),
        })),
    );
  }

  identify(_index: number, item: SearchItem) {
    return item.id;
  }
}
