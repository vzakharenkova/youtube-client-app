import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() videoResult: SearchItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
