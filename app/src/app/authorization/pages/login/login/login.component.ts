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
  constructor(private readonly authService: AuthorizationService, private router: Router) {}

  public auth = this.authService.loginForm$;

  public inputProps: InputPropsModel[] = [
    { title: 'Login', type: 'text', auth: this.auth },
    { title: 'Password', type: 'password', auth: this.auth },
  ];

  public onSubmit(e: Event) {
    e.preventDefault();
    this.authService.setUserData(true);
    if (this.authService.userToken.length) {
      this.router.navigateByUrl(NavRoute.Main);
      this.authService.saveUserData();
    }
  }

  public onRegistrationBtnClick() {
    this.router.navigateByUrl(NavRoute.Registration);
  }
}
