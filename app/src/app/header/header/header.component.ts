import { Component, OnInit } from '@angular/core';
// import { SearchItem } from 'src/app/models/search-item.model';
// import { SortingBy, SortingOrder } from 'src/app/models/shared.model';
// import { SearchService } from 'src/app/search/search.service';
// import { SearchService } from 'src/app/search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // @Output() clickSearch: EventEmitter<SearchItem[]> = new EventEmitter();

  // @Output() clickSort: EventEmitter<Array<string | SortingBy | SortingOrder>> = new EventEmitter();

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

  // onASorted(criteria: Array<string | SortingBy | SortingOrder>) {
  //   if (criteria.length === 1) {
  //     this.sortTerm = <string>criteria[0];
  //     // this.clickSort.emit([this.sortTerm]);
  //   } else {
  //     this.sortedBy = <SortingBy>criteria[0];
  //     this.sortingOrder = <SortingOrder>criteria[1];
  //     // this.clickSort.emit([this.sortedBy, this.sortingOrder]);
  //   }
  // }

  // constructor(private readonly searchService: SearchService) {}

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
