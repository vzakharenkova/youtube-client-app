import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DefaultAuthParam } from 'src/app/authorization/models/authorization.model';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export class LoginInfoComponent implements OnInit {
  constructor(private readonly authService: AuthorizationService) {}

  public defaultUserName = DefaultAuthParam.DefaultUserName;

  public userName!: BehaviorSubject<string>;

  ngOnInit(): void {
    this.userName = this.authService.userName$;
  }

  public get currentUserName() {
    return this.userName.getValue();
  }
}
