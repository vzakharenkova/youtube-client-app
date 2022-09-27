import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  settinsIsOpend = false;

  onToggleSettings() {
    this.settinsIsOpend = !this.settinsIsOpend;
  }

  constructor() {}

  ngOnInit(): void {}
}
