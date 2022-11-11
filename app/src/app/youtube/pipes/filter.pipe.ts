import { Pipe, PipeTransform } from '@angular/core';
import { SortingCriteria, SortingOrder, SortingType } from 'src/app/shared/models/shared.model';
import { VideoItem } from 'src/app/shared/models/video-item.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: VideoItem[], criteria: SortingCriteria): VideoItem[] {
    const result = criteria.term
      ? value.filter((item) =>
          item.snippet.title.toLowerCase().includes((<string>criteria.term).toLowerCase()),
        )
      : value;

    function sortByDate(v1: VideoItem, v2: VideoItem) {
      if (criteria.sortingOrder === SortingOrder.Up) {
        return Date.parse(v1.snippet.publishedAt) - Date.parse(v2.snippet.publishedAt);
      } else {
        return Date.parse(v2.snippet.publishedAt) - Date.parse(v1.snippet.publishedAt);
      }
    }

    function sortByViews(v1: VideoItem, v2: VideoItem) {
      if (criteria.sortingOrder === SortingOrder.Up) {
        return +v1.statistics.viewCount - +v2.statistics.viewCount;
      } else {
        return +v2.statistics.viewCount - +v1.statistics.viewCount;
      }
    }

    if (criteria.sortingType === SortingType.Date) {
      return [...result].sort(sortByDate.bind(this));
    } else if (criteria.sortingType === SortingType.Views) {
      return [...result].sort(sortByViews.bind(this));
    }
    return result;
  }
}
