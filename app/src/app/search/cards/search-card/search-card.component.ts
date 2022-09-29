import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})
export class SearchCardComponent implements OnInit {
  @Input()
  video!: SearchItem;

  constructor() {}

  ngOnInit(): void {}
}
