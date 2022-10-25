import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormModel, StorageItem } from 'src/app/shared/models/shared.model';
import { DefaultAuthParam } from '../models/authorization.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  userName$ = new BehaviorSubject<string>(DefaultAuthParam.DefaultUserName);

  loginForm$ = new BehaviorSubject<FormModel>({ login: '', password: '' });

  lоgin$ = new BehaviorSubject<string>('');

  userToken$ = new BehaviorSubject<string>('');

  setUserData(login: boolean) {
    if (login) {
      if (Object.values(this.loginForm).every((v) => v.length > 0)) {
        this.updateUserData(
          this.loginForm['login'] + this.loginForm['password'],
          this.loginForm['login'],
        );
      }
    } else {
      this.updateUserData(DefaultAuthParam.DefaultToken, DefaultAuthParam.DefaultUserName);
      localStorage.removeItem(StorageItem.Token);
      localStorage.removeItem(StorageItem.UserName);
    }
  }

  public get loginForm() {
    return this.loginForm$.getValue();
  }

  public get userToken() {
    return this.userToken$.getValue();
  }

  public get userName() {
    return this.userName$.getValue();
  }

  private updateUserData(newToken: string, newName: string) {
    this.userToken$.next(newToken);
    this.userName$.next(newName);
  }

  setValue(value: FormModel) {
    this.loginForm$.next(value);
  }

  getUserData() {
    if (
      this.userName === DefaultAuthParam.DefaultUserName &&
      this.userToken === DefaultAuthParam.DefaultToken
    ) {
      const storedToken = localStorage.getItem(StorageItem.Token);
      const storedUserName = localStorage.getItem(StorageItem.UserName);
      if (storedToken && storedUserName) {
        this.updateUserData(storedToken, storedUserName);
        return true;
      } else return false;
    }
    return true;
  }
}
