import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';
import { SortingBy, SortingCriteria, SortingOrder } from 'src/app/models/shared.model';

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
  @Input()
  currentVideoList!: SearchItem[];

  @Output() clickSort: EventEmitter<SortingCriteria> = new EventEmitter();

  @Output() changeSort: EventEmitter<SortingCriteria> = new EventEmitter();

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

    this.clickSort.emit({ sortingBy: this.sortedBy, sortingOrder: this.sortingOrder });
  }

  onChange() {
    this.changeSort.emit({ term: this.sortTerm });
  }

  constructor() {}

  ngOnInit(): void {}
}
