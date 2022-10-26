import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { NavRoute } from 'src/app/shared/models/shared.model';
import { SearchService } from 'src/app/youtube/services/search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  onInputValueChange(event: Event): void {
    this.searchService.changeSearchTerm((<HTMLInputElement>event.target).value);
    if (this.router.url !== NavRoute.Main) {
      this.router.navigateByUrl(NavRoute.Main);
    }
  }

  ngOnInit(): void {
    this.searchService.searchTerm$
      .pipe(
        debounceTime(800),
        distinctUntilChanged(),
        filter((term: string) => term.trim().length >= 3),
      )
      .subscribe((term) => this.searchService.getVideos(term));
  }
}
