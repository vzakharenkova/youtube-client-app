import { Component } from '@angular/core';
import { SearchItem } from './search/search-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  videoResult: SearchItem[] = [];

  onASearched(videoResult: SearchItem[]) {
    this.videoResult = videoResult;
  }
}
