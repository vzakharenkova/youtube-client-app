import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { NavRoute } from 'src/app/shared/models/shared.model';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})
export class SearchCardComponent implements OnInit {
  @Input()
  video!: SearchItem;

  constructor(private router: Router) {}

  public goToVideoDescriptionPage() {
    this.router.navigate([NavRoute.Video, this.video.id]);
  }

  ngOnInit(): void {}
}
