import { Component, Input, OnInit } from '@angular/core';
// import { mockedData } from 'src/app/mocked-data';
import { SearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() videoResult: SearchItem[] = [];

  // @Input() sortTerm = '';
  // videoResult: SearchItem[] = mockedData.items;

  constructor() {}

  ngOnInit(): void {
    console.log(this.videoResult);
  }
}
