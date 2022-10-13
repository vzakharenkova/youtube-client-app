import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';

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

  constructor(private router: Router, private readonly authService: AuthorizationService) {}

  ngOnInit(): void {}

  public goToLoginPage() {
    if (this.authService.getUserToken().length) {
      this.authService.setUserName(false);
      this.authService.setUserToken(false);
    }
    this.router.navigateByUrl('/auth/login');
  }
}
