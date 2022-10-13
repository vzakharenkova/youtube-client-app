import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public goToLoginPage() {
    this.router.navigateByUrl('/auth/login');
  }
}
