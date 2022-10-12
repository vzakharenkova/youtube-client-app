import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';
import { SortingCriteria, SortingOrder, SortingType } from 'src/app/models/shared.model';

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

  sortingTypeEnum = SortingType;

  sortingOrderEnum = SortingOrder;

  sortTerm = '';

  sortingOrder: SortingOrder | null = null;

  sortingType: SortingType | null = null;

  onSortClick(by: SortingType) {
    if (this.sortingType === null || this.sortingType !== by) {
      this.sortingOrder = SortingOrder.Up;
    } else if (this.sortingOrder === SortingOrder.Up) {
      this.sortingOrder = SortingOrder.Down;
    } else {
      this.sortingOrder = SortingOrder.Up;
    }

    this.sortingType = <SortingType>by;

    this.clickSort.emit({ sortingType: this.sortingType, sortingOrder: this.sortingOrder });
  }

  onChange() {
    this.changeSort.emit({ term: this.sortTerm });
  }

  constructor() {}

  ngOnInit(): void {}
}
