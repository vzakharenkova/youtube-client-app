import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mockedData } from 'src/app/mocked-data';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss'],
})
export class DescriptionCardComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    private readonly searchService: SearchService,
    private router: Router,
  ) {}

  public videoId!: string;

  public video!: SearchItem;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.videoId = params['id'];
    });

    this.video = mockedData.items.find((item) => item.id === this.videoId) as SearchItem;
  }

  public onBackClick() {
    this.router.navigateByUrl('/youtube');
  }
}
