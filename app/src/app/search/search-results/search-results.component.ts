import { Component, OnInit } from '@angular/core';
import { mockedData } from 'src/app/mocked-data';
import { SearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  // videoResult: SearchItem[] = [];
  videoResult: SearchItem[] = mockedData.items;

  constructor() {}

  ngOnInit(): void {}
}
