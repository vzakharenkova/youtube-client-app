import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultAuthParam } from 'src/app/authorization/models/authorization.model';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export class LoginInfoComponent implements OnInit {
  defaultUserName = DefaultAuthParam.DefaultUserName;

  userName: string | DefaultAuthParam = DefaultAuthParam.DefaultUserName;

  constructor(private router: Router, private readonly authService: AuthorizationService) {}

  ngOnInit(): void {
    this.authService.userName$.subscribe((name) => (this.userName = name));
  }

  public logout() {
    if (this.authService.getUserToken().length) {
      this.authService.setUserToken(false);
    }
  }

  public goToAdminPage() {
    if (this.authService.getUserToken().length) {
      this.router.navigateByUrl('/admin');
    }
  }
}
