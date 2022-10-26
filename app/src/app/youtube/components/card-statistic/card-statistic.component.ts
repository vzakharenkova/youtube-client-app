import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-card-statistic',
  templateUrl: './card-statistic.component.html',
  styleUrls: ['./card-statistic.component.scss'],
})
export class CardStatisticComponent {
  @Input()
  video!: SearchItem;
}
