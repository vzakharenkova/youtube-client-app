import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InputPropsModel, NavRoute } from 'src/app/shared/models/shared.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  constructor(private readonly router: Router) {}

  public inputProps: InputPropsModel[] = [
    { title: 'First Name', type: 'text' },
    { title: 'Last Name', type: 'text' },
    { title: 'Email', type: 'email' },
    { title: 'Password', type: 'password' },
  ];

  public onLoginBtnClick() {
    this.router.navigateByUrl(NavRoute.Login);
  }
}
