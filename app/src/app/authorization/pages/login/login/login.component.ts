import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';
import { InputPropsModel, NavRoute } from 'src/app/shared/models/shared.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
      this.authService.setUserName(true);
      this.router.navigateByUrl(NavRoute.Main);
      localStorage.setItem('token', this.authService.getUserToken());
      localStorage.setItem('userName', this.authService.getUserName());
    }
  }

  constructor(private readonly authService: AuthorizationService, private router: Router) {}

  ngOnInit(): void {}
}
