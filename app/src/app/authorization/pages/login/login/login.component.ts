import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';
import { InputPropsModel, NavRoute } from 'src/app/shared/models/shared.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  auth = this.authService.loginForm$;

  navRoute = NavRoute;

  inputProps: InputPropsModel[] = [
    { title: 'Login', type: 'text', auth: this.auth },
    { title: 'Password', type: 'password', auth: this.auth },
  ];

  onSubmit(e: Event) {
    e.preventDefault();
    this.authService.setUserToken(true);
    if (this.authService.getUserToken().length) {
      this.router.navigateByUrl(NavRoute.Main);
      this.authService.saveUserData();
    }
  }

  constructor(private readonly authService: AuthorizationService, private router: Router) {}
}
