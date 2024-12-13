import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'libs/openapi/src';
import { StorageService } from '@tmf/libs-shared/services';
import { PROTECTED_PATHS } from './api-config';
import { AuthStatusService } from '../services/authStatus.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private authService = inject(AuthService);
  private storageService = inject(StorageService);
  private authStatusService = inject(AuthStatusService);
  private router = inject(Router);

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<string | null> =
    new BehaviorSubject<string | null>(null);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.isProtectedRoute(req.url, req.method)) {
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            return this.handle401Error(req, next);
          } else if (error.status === 500) {
            this.logout();
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
    const refreshToken = this.storageService.getSessionItem('refresh_token');
    if (refreshToken) {
      if (!this.isRefreshing) {
        this.isRefreshing = true;
        this.refreshTokenSubject.next(null);

        return this.authService
          .apiAuthRefreshPost({
            refreshRequestModel: {
              refresh_token: refreshToken
            }
          })
          .pipe(
            tap((res) => {
              this.authStatusService.setLoginStatus(res.data);
              this.refreshTokenSubject.next(res.data.access_token);
              this.isRefreshing = false;
            }),
            switchMap(() => next.handle(this.addToken(req))),
            catchError(() => {
              this.isRefreshing = false;
              this.logout();
              return throwError(
                () => new Error('Session expired, please log in again')
              );
            })
          );
      } else {
        return this.refreshTokenSubject.pipe(
          filter((token) => token !== null),
          take(1),
          switchMap(() => next.handle(this.addToken(req)))
        );
      }
    } else {
      this.logout();
      return throwError(
        () => new Error('No refresh token available, logging out')
      );
    }
  }

  private addToken(req: HttpRequest<any>): HttpRequest<any> {
    const accessToken = this.storageService.getSessionItem('access_token');
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }

  private logout(): void {
    this.authStatusService.logout();
    this.router.navigate(['/login']);
  }
}
