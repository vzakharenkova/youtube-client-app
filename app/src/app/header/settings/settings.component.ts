import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';
import { SortingBy, SortingOrder } from 'src/app/models/shared.model';
import { SearchService } from 'src/app/search/search.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  currentVideoList: SearchItem[] = [];

  // @Output() clickSort: EventEmitter<[string, string]> = new EventEmitter();

  // @Output() changeSort: EventEmitter<string[]> = new EventEmitter();

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
    // this.clickSort.emit([this.sortedBy, this.sortingOrder]);
  }

  onChange(str: string) {
    this.sortTerm = str;
    this.searchService.changeSortTerm(this.sortTerm);
    this.searchService.changeVideos(this.currentVideoList);
    // this.changeSort.emit([this.sortTerm]);
  }

  constructor(private readonly searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.videos$.subscribe((videos) => (this.currentVideoList = videos));
  }
}
