import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DEFAULT_AUTH_PARAMS } from 'src/app/authorization/models/authorization.model';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export class LoginInfoComponent {
  public defaultUserName = DEFAULT_AUTH_PARAMS.DEFAULT_USER_NAME;

  public userName: BehaviorSubject<string> = this.authService.userName$;

  constructor(private router: Router, private readonly authService: AuthorizationService) {}

  public get currentUserName() {
    return this.authService.userName;
  }

  public logout() {
    if (this.authService.userToken.length) {
      this.authService.setUserData(false);
      this.authService.setValue({ login: '', password: '' });
    }
  }

  public goToAdminPage() {
    if (this.authService.userToken.length) {
      this.router.navigateByUrl('/admin');
    }
  }
}
