import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  userToken$ = new BehaviorSubject<string>('');

  setUserToken(userToken: string) {
    this.userToken$.next(userToken);
  }

  getUserToken() {
    return this.userToken$.getValue();
  }

  constructor() {}
}
