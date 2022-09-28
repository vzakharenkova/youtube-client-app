import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchItem } from 'src/app/search/search-item.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  @Input()
  currentVideoList!: SearchItem[];

  @Output() clickSort: EventEmitter<SearchItem[]> = new EventEmitter();

  sortingOrder: 'up' | 'down' | null = null;

  // sortedByDate = false;

  // sortedByViews = false;

  sortedBy: 'date' | 'views' | null = null;

  sortByDate(v1: SearchItem, v2: SearchItem) {
    if (this.sortingOrder === 'up') {
      return Date.parse(v1.snippet.publishedAt) - Date.parse(v2.snippet.publishedAt);
    } else {
      return Date.parse(v2.snippet.publishedAt) - Date.parse(v1.snippet.publishedAt);
    }
  }

  sortByViews(v1: SearchItem, v2: SearchItem) {
    if (this.sortingOrder === 'up') {
      return +v1.statistics.viewCount - +v2.statistics.viewCount;
    } else {
      return +v2.statistics.viewCount - +v1.statistics.viewCount;
    }
  }

  onClick(by: 'date' | 'views') {
    if (this.sortedBy === null || this.sortedBy !== by) {
      this.sortingOrder = 'up';
    } else if (this.sortingOrder === 'up') {
      this.sortingOrder = 'down';
    } else {
      this.sortingOrder = 'up';
    }

    this.sortedBy = by;

    if (this.sortedBy === 'date') {
      this.currentVideoList.sort(this.sortByDate.bind(this));
    } else {
      this.currentVideoList.sort(this.sortByViews.bind(this));
    }
    this.clickSort.emit(this.currentVideoList);
  }

  constructor() {}

  ngOnInit(): void {}
}
