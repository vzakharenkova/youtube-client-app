import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { SearchService } from './search.service';

@Injectable()
export class SearchInterceptorService implements HttpInterceptor {
  constructor(private searchService: SearchService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const params = this.searchService.getHttpConfig();

    function handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        console.error('An error occurred:', error.error);
      } else {
        console.error(`Backend returned code ${error.status}, body was: `, error.error);
      }

      return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    request = request.clone({
      setParams: {
        key: params.apiKey,
      },
    });

    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          this.router.navigateByUrl('/error');
        }
        return handleError(error);
      }),
    );
  }
}
