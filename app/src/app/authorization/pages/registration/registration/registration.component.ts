import { Component } from '@angular/core';
import { InputPropsModel, NavRoute } from 'src/app/shared/models/shared.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  navRoute = NavRoute;

  inputProps: InputPropsModel[] = [
    { title: 'First Name', type: 'text' },
    { title: 'Last Name', type: 'text' },
    { title: 'Email', type: 'email' },
    { title: 'Password', type: 'password' },
  ];
}
