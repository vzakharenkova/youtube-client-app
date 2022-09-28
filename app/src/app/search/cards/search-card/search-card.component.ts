import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../../search-item.model';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})
export class SearchCardComponent implements OnInit {
  @Input()
  video!: SearchItem;
  // video: SearchItem | null = null;

  constructor() {}

  ngOnInit(): void {}
}
