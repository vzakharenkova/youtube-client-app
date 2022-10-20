import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DefaultAuthParam } from '../models/authorization.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  userName$ = new BehaviorSubject<string | DefaultAuthParam>(DefaultAuthParam.DefaultUserName);

  loginForm$ = new BehaviorSubject<{ [x: string]: string }>({ login: '', password: '' });

  userToken$ = new BehaviorSubject<string>('');

  setUserToken(login: boolean) {
    if (login) {
      if (Object.values(this.loginForm$.getValue()).every((v) => v.length > 0)) {
        this.userToken$.next(
          this.loginForm$.getValue()['login'] + this.loginForm$.getValue()['password'],
        );
        this.userName$.next(this.loginForm$.getValue()['login']);
      }
    } else {
      this.userToken$.next('');
      localStorage.removeItem('token');
      this.userName$.next(DefaultAuthParam.DefaultUserName);
      localStorage.removeItem('userName');
      this.setValue(this.loginForm$, { login: '', password: '' });
    }
  }

  setValue(ref: BehaviorSubject<{ [x: string]: string }>, value: { [x: string]: string }) {
    ref.next(value);
  }

  getUserToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.userToken$.next(token);
      this.userName$.next(<string>localStorage.getItem('userName'));
    }
    return this.userToken$.getValue();
  }

  saveUserData() {
    localStorage.setItem('token', this.userToken$.getValue());
    localStorage.setItem('userName', this.userName$.getValue());
  }
}
