import { Component, OnInit } from '@angular/core';
import { InputPropsModel } from 'src/app/shared/models/shared.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  inputProps: InputPropsModel[] = [
    { title: 'First Name', type: 'text' },
    { title: 'Last Name', type: 'text' },
    { title: 'Email', type: 'email' },
    { title: 'Password', type: 'password' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
