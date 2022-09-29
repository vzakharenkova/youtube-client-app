import { Component } from '@angular/core';
import { SearchItem } from './models/search-item.model';
import { SortingBy, SortingOrder } from './models/shared.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  videoResult: SearchItem[] = [];

  sortTerm = '';

  sortingOrder: SortingOrder = null;

  sortedBy: SortingBy = null;

  onASearched(videoResult: SearchItem[]) {
    this.videoResult = videoResult;
  }

  onASorted(criteria: Array<string | SortingBy | SortingOrder>) {
    if (criteria.length === 1) {
      this.sortTerm = <string>criteria[0];
    } else {
      this.sortedBy = <SortingBy>criteria[0];
      this.sortingOrder = <SortingOrder>criteria[1];
    }
  }
}
