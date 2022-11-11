import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavRoute } from 'src/app/shared/models/shared.model';
import { VideoItem } from 'src/app/shared/models/video-item.model';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})
export class SearchCardComponent {
  @Input()
  video!: VideoItem;

  constructor(private router: Router) {}

  public goToVideoDescriptionPage() {
    this.router.navigate([NavRoute.Video, this.video.id]);
  }
}
