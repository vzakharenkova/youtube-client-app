import { Component, OnInit } from '@angular/core';
import { DefaultAuthParam } from 'src/app/authorization/models/authorization.model';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export class LoginInfoComponent implements OnInit {
  constructor(private readonly authService: AuthorizationService) {}

  defaultUserName = DefaultAuthParam.DefaultUserName;

  userName!: string;

  ngOnInit(): void {
    this.authService.userName$.subscribe((name) => (this.userName = name));
  }
}
