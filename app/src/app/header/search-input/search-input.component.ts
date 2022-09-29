import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { mockedData } from 'src/app/mocked-data';
import { SearchItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Output() clickSearch: EventEmitter<SearchItem[]> = new EventEmitter();

  searchTerm: string = '';

  previousSearchTerm: string = '';

  videoResult: SearchItem[] = [];

  onClick(): void {
    if (this.searchTerm.length && this.searchTerm !== this.previousSearchTerm) {
      this.previousSearchTerm = this.searchTerm;
      this.videoResult = mockedData.items.filter(
        (item) =>
          item.snippet.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.snippet.description.toLowerCase().includes(this.searchTerm.toLowerCase()),
      );
      this.clickSearch.emit(this.videoResult);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
