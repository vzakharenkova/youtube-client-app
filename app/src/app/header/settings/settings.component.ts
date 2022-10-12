import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';
import { SortingOrder, SortingType } from 'src/app/models/shared.model';
import { SearchService } from 'src/app/search/search.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  currentVideoList: SearchItem[] = [];

  sortTerm = '';

  sortingTypeEnum = SortingType;

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
    this.sortingType = by;

    this.searchService.changeSortingCriteria(this.sortingType, this.sortingOrder);
    this.searchService.changeVideos(this.currentVideoList);
  }

  onChange(str: string) {
    this.sortTerm = str;
    this.searchService.changeSortTerm(this.sortTerm);
    this.searchService.changeVideos(this.currentVideoList);
  }

  constructor(private readonly searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.videos$.subscribe((videos) => (this.currentVideoList = videos));
  }
}
