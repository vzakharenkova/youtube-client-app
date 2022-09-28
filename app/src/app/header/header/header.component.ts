import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchItem } from 'src/app/search/search-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() clickSearch: EventEmitter<SearchItem[]> = new EventEmitter();

  @Output() clickSort: EventEmitter<string> = new EventEmitter();

  settinsIsOpend = false;

  videoResult: SearchItem[] = [];

  sortTerm = '';

  onToggleSettings() {
    this.settinsIsOpend = !this.settinsIsOpend;
  }

  onASearched(videoResult: SearchItem[]) {
    this.videoResult = videoResult;
    this.clickSearch.emit(this.videoResult);
  }

  onASorted(sortTerm: string) {
    this.sortTerm = sortTerm;
    this.clickSort.emit(this.sortTerm);
  }

  constructor() {}

  ngOnInit(): void {}
}
