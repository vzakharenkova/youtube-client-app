import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';
import { NavRoute } from 'src/app/shared/models/shared.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  settingsIsOpend = false;

  onToggleSettings() {
    this.settingsIsOpend = !this.settingsIsOpend;
  }

  constructor(private router: Router, private readonly authService: AuthorizationService) {}

  public goToLoginPage() {
    if (this.authService.getUserData()) {
      this.authService.setUserData(false);
    }
    this.router.navigateByUrl(NavRoute.Login);
  }
}
