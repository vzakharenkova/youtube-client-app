import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { SortingBy, SortingOrder } from '../models/shared.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    value: SearchItem[],
    criteria: [sortTerm: string, sortedBy: SortingBy, sortingOrder: SortingOrder],
  ): SearchItem[] {
    const result = criteria[0]
      ? value.filter((item) => item.snippet.title.toLowerCase().includes(criteria[0].toLowerCase()))
      : value;

    function sortByDate(v1: SearchItem, v2: SearchItem) {
      if (criteria[2] === 'up') {
        return Date.parse(v1.snippet.publishedAt) - Date.parse(v2.snippet.publishedAt);
      } else {
        return Date.parse(v2.snippet.publishedAt) - Date.parse(v1.snippet.publishedAt);
      }
    }

    function sortByViews(v1: SearchItem, v2: SearchItem) {
      if (criteria[2] === 'up') {
        return +v1.statistics.viewCount - +v2.statistics.viewCount;
      } else {
        return +v2.statistics.viewCount - +v1.statistics.viewCount;
      }
    }

    if (criteria[1] === 'date') {
      result.sort(sortByDate.bind(this));
    } else if (criteria[1] === 'views') {
      result.sort(sortByViews.bind(this));
    }
    return result;
  }
}
