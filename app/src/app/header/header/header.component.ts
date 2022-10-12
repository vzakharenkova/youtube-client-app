import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';
import { SortingType, SortingCriteria, SortingOrder } from 'src/app/models/shared.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() clickSearch: EventEmitter<SearchItem[]> = new EventEmitter();

  @Output() clickSort: EventEmitter<SortingCriteria> = new EventEmitter();

  settinsIsOpend = false;

  videoResult: SearchItem[] = [];

  sortTerm = '';

  sortingOrder: SortingOrder | null = null;

  sortedBy: SortingType | null = null;

  onToggleSettings() {
    this.settinsIsOpend = !this.settinsIsOpend;
  }

  onASearched(videoResult: SearchItem[]) {
    this.videoResult = videoResult;
    this.clickSearch.emit(this.videoResult);
  }

  onASorted(criteria: SortingCriteria) {
    if (criteria.term) {
      this.sortTerm = criteria.term;
      this.clickSort.emit({ term: this.sortTerm });
    }
    if (criteria.sortingType && criteria.sortingOrder) {
      this.sortedBy = criteria.sortingType;
      this.sortingOrder = criteria.sortingOrder;
      this.clickSort.emit({ sortingType: this.sortedBy, sortingOrder: this.sortingOrder });
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
