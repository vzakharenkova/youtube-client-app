import { Component, OnInit } from '@angular/core';
import { InputPropsModel } from 'src/app/models/shared.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  inputProps: InputPropsModel[] = [
    { title: 'Login', type: 'text' },
    { title: 'Password', type: 'password' },
  ];

  // constructor(private router: Router) {}
  ngOnInit(): void {}
  // public goToLoginPage() {
  //   this.router.navigate(['/login']);
  // }
}
