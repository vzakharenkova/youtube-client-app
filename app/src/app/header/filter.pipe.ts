import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../search/search-item.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: SearchItem[], sortTerm: string): SearchItem[] {
    return sortTerm
      ? value.filter((item) => item.snippet.title.toLowerCase().includes(sortTerm.toLowerCase()))
      : value;
  }
}
