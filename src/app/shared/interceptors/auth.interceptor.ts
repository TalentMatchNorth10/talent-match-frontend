import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'libs/openapi/src';
import { StorageService } from '@tmf/libs-shared/services';
import { PROTECTED_PATHS } from './api-config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.isProtectedRoute(req.url, req.method)) {
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            return this.handle401Error(req, next);
          }
          return throwError(() => error);
        })
      );
    }
    return next.handle(req);
  }

  private isProtectedRoute(url: string, method: string): boolean {
    return PROTECTED_PATHS.some(
      (config) =>
        new RegExp(config.pattern).test(url) && config.methods.includes(method)
    );
  }

  private handle401Error(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const refreshToken = this.storageService.getLocalItem('refreshToken');
    if (refreshToken) {
      return this.authService
        .apiAuthRefreshPost({
          refreshRequestModel: {
            refresh_token: refreshToken
          }
        })
        .pipe(
          tap((res) => {
            this.storageService.setLocalItem(
              'access_token',
              res.data.access_token
            );
            this.storageService.setLocalItem(
              'refresh_token',
              res.data.refresh_token
            );
          }),
          switchMap(() => next.handle(req.clone())),
          catchError(() => {
            this.logout();
            return throwError(
              () => new Error('Session expired, please log in again')
            );
          })
        );
    } else {
      this.logout();
      return throwError(
        () => new Error('No refresh token available, logging out')
      );
    }
  }

  private logout(): void {
    this.storageService.removeLocalItem('access_token');
    this.storageService.removeLocalItem('refresh_token');
    this.router.navigate(['/login']);
  }
}
