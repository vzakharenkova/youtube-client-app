import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormModel, StorageItem } from 'src/app/shared/models/shared.model';
import { DefaultAuthParam } from '../models/authorization.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  public userName$ = new BehaviorSubject<string>(DefaultAuthParam.DefaultUserName);

  public loginForm$ = new BehaviorSubject<FormModel>({ login: '', password: '' });

  public userToken$ = new BehaviorSubject<string>('');

  public setUserData(login: boolean) {
    if (login) {
      if (Object.values(this.loginForm).every((v) => v.length > 0)) {
        const newToken = this.loginForm['login'] + this.loginForm['password'];
        const newUserName = this.loginForm['login'];
        this.updateUserData(newToken, newUserName);
        localStorage.setItem(StorageItem.Token, newToken);
        localStorage.setItem(StorageItem.UserName, newUserName);
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

  public setValue(value: FormModel) {
    this.loginForm$.next(value);
  }

  public getUserData() {
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
