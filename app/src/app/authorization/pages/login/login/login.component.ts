import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';
import { NavRoute } from 'src/app/shared/models/shared.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  navRoute = NavRoute;

  userLogin!: string;

  userPassword!: string;

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

  onChange(event: Event) {
    if (!event) return;
    const inputName = (<HTMLInputElement>event.target).id;
    const inputValue = (<HTMLInputElement>event.target).value;
    const n: { [x: string]: string } = {
      [inputName]: inputValue,
    };
    this.authService.setValue(
      <BehaviorSubject<{ [x: string]: string }>>this.authService.loginForm$,
      Object.assign(this.authService.loginForm$.getValue() as { [x: string]: string }, n),
    );
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.authService.setUserToken(true);
    if (this.authService.getUserToken().length) {
      this.router.navigateByUrl(NavRoute.Main);
      this.authService.saveUserData();
    }
  }

  constructor(
    private readonly authService: AuthorizationService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.initForm();
    this.authService.loginForm$.subscribe((form) => {
      this.userLogin = form['login'];
      this.userPassword = form['password'];
    });
  }
}
