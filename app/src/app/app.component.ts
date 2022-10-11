import { Component } from '@angular/core';
import { SearchItem } from './models/search-item.model';
import { SortingBy, SortingCriteria, SortingOrder } from './models/shared.model';

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

  onASorted(criteria: SortingCriteria) {
    if (criteria.term) {
      this.sortTerm = criteria.term;
    }
    if (criteria.sortingBy && criteria.sortingOrder) {
      this.sortedBy = criteria.sortingBy;
      this.sortingOrder = criteria.sortingOrder;
    }
  }
}
