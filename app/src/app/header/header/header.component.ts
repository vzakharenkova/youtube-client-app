import { Component, OnInit } from '@angular/core';
// import { SearchItem } from 'src/app/models/search-item.model';
// import { SortingBy, SortingCriteria, SortingOrder } from 'src/app/models/shared.model';
// import { SearchService } from 'src/app/search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // @Output() clickSearch: EventEmitter<SearchItem[]> = new EventEmitter();

  // @Output() clickSort: EventEmitter<SortingCriteria> = new EventEmitter();

  settinsIsOpend = false;

  // videoResult: SearchItem[] = [];

  // sortTerm = '';

  // sortingOrder: SortingOrder = null;

  // sortedBy: SortingBy = null;

  onToggleSettings() {
    this.settinsIsOpend = !this.settinsIsOpend;
  }

  // onASearched(videoResult: SearchItem[]) {
  //   this.videoResult = videoResult;
  //   // this.clickSearch.emit(this.videoResult);
  // }

  // onASorted(criteria: SortingCriteria) {
  //   if (criteria.term) {
  //     this.sortTerm = criteria.term;
  //     this.clickSort.emit({ term: this.sortTerm });
  //   }
  //   if (criteria.sortingBy && criteria.sortingOrder) {
  //     this.sortedBy = criteria.sortingBy;
  //     this.sortingOrder = criteria.sortingOrder;
  //     this.clickSort.emit({ sortingBy: this.sortedBy, sortingOrder: this.sortingOrder });
  //   }
  // }

  // public setAnyCount(): void {
  //   this.searchService.changeCount(Math.random());
  // }

  ngOnInit(): void {
    // this.searchService.sortTerm$.subscribe((sortTerm) => (this.sortTerm = sortTerm));
    // this.searchService.sortedBy$.subscribe((sortedBy) => (this.sortedBy = sortedBy));
    // this.searchService.sortingOrder$.subscribe(
    //   (sortingOrder) => (this.sortingOrder = sortingOrder),
    // );
  }
}
