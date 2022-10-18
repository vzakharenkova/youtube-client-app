import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavRoute } from 'src/app/shared/models/shared.model';
import { VideoItem } from 'src/app/shared/models/video-item.model';
import { SearchService } from 'src/app/youtube/services/search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  searchTerm: string = '';

  previousSearchTerm: string = '';

  videoResult: VideoItem[] = [];

  onSearch(term: string): void {
    this.searchTerm = term;
    if (
      (this.searchTerm.length && this.searchTerm !== this.previousSearchTerm) ||
      this.router.url !== NavRoute.Main
    ) {
      if (this.router.url !== NavRoute.Main) {
        this.router.navigateByUrl(NavRoute.Main);
      }
      this.previousSearchTerm = this.searchTerm;
      // this.videoResult = mockedData.items.filter(
      //   (item) =>
      //     item.snippet.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      //     item.snippet.description.toLowerCase().includes(this.searchTerm.toLowerCase()),
      // );
      // const data: SearchResponse = this.searchService.getVideos(term);
      // this.videoResult =  data.spi
      // this.searchService.changeVideos(this.videoResult);
      this.searchService.getVideos(term);
    }
  }

  ngOnInit(): void {
    this.searchService.videos$.subscribe((videos) => (this.videoResult = videos));
  }

  constructor(private readonly searchService: SearchService, private router: Router) {}
}
