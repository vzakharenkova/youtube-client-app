import { Component } from '@angular/core';
import { SortingType, SortingOrder } from 'src/app/shared/models/shared.model';
import { SearchService } from 'src/app/youtube/services/search.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  public sortingTypeEnum = SortingType;

  private sortingOrder: SortingOrder | null = null;

  private sortingType: SortingType | null = null;

  public sortTerm!: string;

  constructor(private readonly searchService: SearchService) {}

  public onSortClick(by: SortingType) {
    if (this.sortingType === null || this.sortingType !== by) {
      this.sortingOrder = SortingOrder.Up;
    } else if (this.sortingOrder === SortingOrder.Up) {
      this.sortingOrder = SortingOrder.Down;
    } else {
      this.sortingOrder = SortingOrder.Up;
    }
    this.sortingType = by;

    this.searchService.changeSortingCriteria(this.sortingType, this.sortingOrder);
  }

  public onChange(str: string) {
    this.sortTerm = str;
    this.searchService.changeSortTerm(this.sortTerm);
  }
}
