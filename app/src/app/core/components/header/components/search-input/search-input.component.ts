import { Component, OnInit } from '@angular/core';
import { mockedData } from 'src/app/mocked-data';

import { SearchItem } from 'src/app/shared/models/search-item.model';
import { SearchService } from 'src/app/youtube/services/search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  searchTerm: string = '';

  previousSearchTerm: string = '';

  videoResult: SearchItem[] = [];

  onSearchClick(): void {
    if (this.searchTerm.length && this.searchTerm !== this.previousSearchTerm) {
      this.previousSearchTerm = this.searchTerm;
      this.videoResult = mockedData.items.filter(
        (item) =>
          item.snippet.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.snippet.description.toLowerCase().includes(this.searchTerm.toLowerCase()),
      );
      this.searchService.changeVideos(this.videoResult);
    }
  }

  constructor(private readonly searchService: SearchService) {}

  ngOnInit(): void {}
}