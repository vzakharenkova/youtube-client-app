import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';
import { InputPropsModel } from 'src/app/shared/models/shared.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  auth = this.authService.loginForm$;

  inputProps: InputPropsModel[] = [
    { title: 'Login', type: 'text', auth: this.auth },
    { title: 'Password', type: 'password', auth: this.auth },
  ];

  onSubmit(e: Event) {
    e.preventDefault();
    console.log('ffff');
    this.authService.setUserToken(true);
    if (this.authService.getUserToken().length) {
      console.log('fffknerjgnf');
      this.authService.setUserName(true);
      this.router.navigateByUrl('/youtube');
      localStorage.setItem('token', this.authService.getUserToken());
      localStorage.setItem('userName', this.authService.getUserToken());
    }
  }

  constructor(private readonly authService: AuthorizationService, private router: Router) {}

  ngOnInit(): void {}
}