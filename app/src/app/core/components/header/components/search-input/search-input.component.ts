import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mockedData } from 'src/app/mocked-data';

import { SearchItem } from 'src/app/shared/models/search-item.model';
import { NavRoute } from 'src/app/shared/models/shared.model';
import { SearchService } from 'src/app/youtube/services/search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  searchTerm: string = '';

  previousSearchTerm: string = '';

  videoResult: SearchItem[] = [];

  onSearchClick(): void {
    if (
      (this.searchTerm.length && this.searchTerm !== this.previousSearchTerm) ||
      this.router.url !== NavRoute.Main
    ) {
      if (this.router.url !== NavRoute.Main) {
        this.router.navigateByUrl(NavRoute.Main);
      }
      this.previousSearchTerm = this.searchTerm;
      this.videoResult = mockedData.items.filter(
        (item) =>
          item.snippet.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.snippet.description.toLowerCase().includes(this.searchTerm.toLowerCase()),
      );
      this.searchService.changeVideos(this.videoResult);
    }
  }

  constructor(private readonly searchService: SearchService, private router: Router) {}
}
