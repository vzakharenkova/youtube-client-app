import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockedData } from 'src/app/mocked-data';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss'],
})
export class DescriptionCardComponent implements OnInit {
  public videoId!: string;

  public video!: SearchItem;

  constructor(public route: ActivatedRoute, private readonly searchService: SearchService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.videoId = params['id'];
    });
    // this.video = this.searchService.videos$
    //   .getValue()
    //   .find((item) => item.id === this.videoId) as SearchItem;
    this.video = mockedData.items.find((item) => item.id === this.videoId) as SearchItem;
  }
}
