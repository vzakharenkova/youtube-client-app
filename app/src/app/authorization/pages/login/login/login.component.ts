import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';
import { FormModel, NavRoute } from 'src/app/shared/models/shared.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  userLogin: Observable<string> = this.authService.loginForm$.pipe(map((f) => f['login']));

  userPassword: Observable<string> = this.authService.loginForm$.pipe(map((f) => f['password']));

  constructor(
    private readonly authService: AuthorizationService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.formBuilder.group({
      login: [
        null,
        [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-])/),
        ],
      ],
    });
  }

  get _login() {
    return this.loginForm.get('login');
  }

  get _password() {
    return this.loginForm.get('password');
  }

  public onChange(event: Event) {
    if (!event) return;
    const inputName = (<HTMLInputElement>event.target).id;
    const inputValue = (<HTMLInputElement>event.target).value;
    const loginFormField: FormModel = {
      [inputName]: inputValue,
    };
    this.authService.setValue(
      Object.assign(this.authService.loginForm as FormModel, loginFormField),
    );
  }

  public onRegistrationBtnClick() {
    this.router.navigateByUrl(NavRoute.Registration);
  }

  public onSubmit(e: Event) {
    e.preventDefault();
    this.authService.setUserData(true);
    if (this.authService.userToken.length) {
      this.router.navigateByUrl(NavRoute.Main);
    }
  }
}
