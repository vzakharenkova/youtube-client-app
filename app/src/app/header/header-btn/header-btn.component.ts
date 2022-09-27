import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-btn',
  templateUrl: './header-btn.component.html',
  styleUrls: ['./header-btn.component.scss'],
})
export class HeaderBtnComponent implements OnInit {
  @Input()
  type!: string;

  @Input()
  icon!: string;

  constructor() {}

  ngOnInit(): void {}
}
