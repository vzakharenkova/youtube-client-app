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
  settinsIsOpend = false;

  onToggleSettings() {
    this.settinsIsOpend = !this.settinsIsOpend;
  }

  constructor(private router: Router, private readonly authService: AuthorizationService) {}

  public goToLoginPage() {
    if (!this.authService.getUserToken().length) {
      this.router.navigateByUrl(NavRoute.Login);
      // this.authService.setUserToken(false);
    }
  }
}
