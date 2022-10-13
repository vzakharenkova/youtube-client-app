import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private readonly authService: AuthorizationService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[],
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.getUserToken().length) {
      this.router.navigateByUrl('/auth/login');
    }
    this.authService.getUserName();

    return !!this.authService.getUserToken().length;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.authService.getUserToken().length) {
      this.router.navigateByUrl('/auth/login');
    }
    this.authService.getUserName();

    return !!this.authService.getUserToken().length;
  }
}