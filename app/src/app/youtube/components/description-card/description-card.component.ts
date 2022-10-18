import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoItem } from 'src/app/shared/models/video-item.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss'],
})
export class DescriptionCardComponent implements OnInit {
  public videoId!: string;

  public video!: VideoItem;

  constructor(
    public route: ActivatedRoute,
    private readonly searchService: SearchService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.videoId = params['id'];
    });
    this.searchService.getVideoById(this.videoId).subscribe((video) => {
      this.video = <VideoItem>video.items[0];
    });
  }

  onBackClick() {
    this.router.navigateByUrl('/youtube');
  }
}
