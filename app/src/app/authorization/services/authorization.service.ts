import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DefaultAuthParam } from '../models/authorization.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  userName$ = new BehaviorSubject<string | DefaultAuthParam>(DefaultAuthParam.DefaultUserName);

  loginForm$ = new BehaviorSubject<{ [x: string]: string }>({ login: '', password: '' });

  lоgin$ = new BehaviorSubject<string>('');

  userToken$ = new BehaviorSubject<string>('');

  setUserToken(login: boolean) {
    if (login) {
      if (Object.values(this.loginForm$.getValue()).every((v) => v.length > 0)) {
        this.userToken$.next(
          this.loginForm$.getValue()['login'] + this.loginForm$.getValue()['password'],
        );
      }
    } else {
      this.userToken$.next('');
      localStorage.removeItem('token');
    }
  }

  setValue(ref: BehaviorSubject<{ [x: string]: string }>, value: { [x: string]: string }) {
    ref.next(value);
  }

  getUserToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.userToken$.next(token);
    }
    return this.userToken$.getValue();
  }

  setUserName(login: boolean) {
    if (login) {
      this.userName$.next(this.loginForm$.getValue()['login']);
    } else {
      this.userName$.next(DefaultAuthParam.DefaultUserName);
      localStorage.removeItem('userName');
    }
  }

  getUserName() {
    const userName = localStorage.getItem('userName');
    if (userName) {
      this.userName$.next(userName);
    }
    return this.userName$.getValue();
  }

  constructor() {}
}
