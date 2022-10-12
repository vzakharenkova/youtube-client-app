import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { SortingType, SortingOrder } from 'src/app/shared/models/shared.model';
import { SearchService } from 'src/app/youtube/services/search.service';

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
