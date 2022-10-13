import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export class LoginInfoComponent implements OnInit {
  userName = '';

  constructor(private readonly authService: AuthorizationService) {}

  ngOnInit(): void {
    this.authService.userName$.subscribe((name) => (this.userName = name));
  }
}
