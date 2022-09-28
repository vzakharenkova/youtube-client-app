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

  dateStatus = '';

  constructor() {}

  ngOnInit(): void {
    const currentDate = Date.now();
    const videoDate = new Date(this.video.snippet.publishedAt);
    const gap = Math.abs(currentDate - videoDate.getTime());
    const startDate = Date.parse('01.01.1997');
    const dateMap = {
      halfYear: Math.abs(startDate - Date.parse('01.06.1997')),
      month: Math.abs(startDate - Date.parse('01.02.1997')),
      week: Math.abs(startDate - Date.parse('08.01.1997')),
    };
    const statusClasses = ['group-1', 'group-2', 'group-3', 'group-4'];

    if (gap > dateMap.halfYear) {
      this.dateStatus = statusClasses[3];
      return;
    } else if (gap > dateMap.month) {
      this.dateStatus = statusClasses[2];
      return;
    } else if (gap > dateMap.week) {
      this.dateStatus = statusClasses[1];
      return;
    } else {
      this.dateStatus = statusClasses[0];
    }
  }
}
