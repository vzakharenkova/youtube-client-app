import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-card-statistic',
  templateUrl: './card-statistic.component.html',
  styleUrls: ['./card-statistic.component.scss'],
})
export class CardStatisticComponent implements OnInit {
  @Input()
  video!: SearchItem;

  constructor() {}

  ngOnInit(): void {}
}
