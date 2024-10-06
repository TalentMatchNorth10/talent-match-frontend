import type {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoadingService } from '@tmf/libs-shared/components/loading/loading.service';
import { delay, finalize, Observable } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const loadingService = inject(LoadingService);
    loadingService.showLoading();

    return next.handle(req).pipe(finalize(() => loadingService.hideLoading()));
  }
}
