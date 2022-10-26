import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DEFAULT_AUTH_PARAMS } from 'src/app/authorization/models/authorization.model';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export class LoginInfoComponent {
  public defaultUserName = DEFAULT_AUTH_PARAMS.DEFAULT_USER_NAME;

  public userName: BehaviorSubject<string> = this.authService.userName$;

  constructor(private readonly authService: AuthorizationService) {}

  public get currentUserName() {
    return this.userName.getValue();
  }
}
