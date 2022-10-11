import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';
import { SortingBy, SortingCriteria, SortingOrder } from 'src/app/models/shared.model';
import { SearchService } from 'src/app/search/search.service';

enum SortingType {
  Date = 'date',
  Views = 'views',
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  currentVideoList: SearchItem[] = [];

  // @Output() clickSort: EventEmitter<SortingCriteria> = new EventEmitter();

  sortingType = SortingType;

  sortTerm = '';

  sortingOrder: SortingOrder = null;

  sortedBy: SortingBy = null;

  onClick(by: 'date' | 'views') {
    if (this.sortedBy === null || this.sortedBy !== by) {
      this.sortingOrder = 'up';
    } else if (this.sortingOrder === 'up') {
      this.sortingOrder = 'down';
    } else {
      this.sortingOrder = 'up';
    }
    this.sortedBy = by;

    this.searchService.changeSortingCriteria(this.sortedBy, this.sortingOrder);
    this.searchService.changeVideos(this.currentVideoList);
    // this.clickSort.emit({ sortingBy: this.sortedBy, sortingOrder: this.sortingOrder });
  }

  onChange(str: string) {
    this.sortTerm = str;
    this.searchService.changeSortTerm(this.sortTerm);
    this.searchService.changeVideos(this.currentVideoList);
    // this.changeSort.emit({ term: this.sortTerm });
  }

  constructor(private readonly searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.videos$.subscribe((videos) => (this.currentVideoList = videos));
  }
}
