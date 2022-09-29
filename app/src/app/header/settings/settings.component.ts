import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';
import { SortingBy, SortingOrder } from 'src/app/models/shared.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  @Input()
  currentVideoList!: SearchItem[];

  @Output() clickSort: EventEmitter<[string, string]> = new EventEmitter();

  @Output() changeSort: EventEmitter<string[]> = new EventEmitter();

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

    this.clickSort.emit([this.sortedBy, this.sortingOrder]);
  }

  onChange() {
    this.changeSort.emit([this.sortTerm]);
  }

  constructor() {}

  ngOnInit(): void {}
}
