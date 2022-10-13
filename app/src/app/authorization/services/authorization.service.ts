import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  loginForm$ = new BehaviorSubject<{ [x: string]: string }>({ login: '', password: '' });

  lоgin$ = new BehaviorSubject<string>('');

  userToken$ = new BehaviorSubject<string>('');

  setUserToken() {
    if (Object.values(this.loginForm$.getValue()).every((v) => v.length > 0)) {
      this.userToken$.next(
        this.loginForm$.getValue()['login'] + this.loginForm$.getValue()['password'],
      );
    }
  }

  setValue(ref: BehaviorSubject<{ [x: string]: string }>, value: { [x: string]: string }) {
    ref.next(value);
  }

  getUserToken() {
    return this.userToken$.getValue();
  }

  constructor() {}
}
