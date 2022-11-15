import { Component, Input } from '@angular/core';
import { VideoItem } from 'src/app/shared/models/video-item.model';

@Component({
  selector: 'app-card-statistic',
  templateUrl: './card-statistic.component.html',
  styleUrls: ['./card-statistic.component.scss'],
})
export class CardStatisticComponent {
  @Input()
  video!: VideoItem;
}
