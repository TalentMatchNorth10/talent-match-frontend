import { Injectable } from '@angular/core';
import { BehaviorSubject, of, timer } from 'rxjs';
import { scan, map, delay, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private apiCallCount$ = new BehaviorSubject<number>(0);

  public loading$ = this.apiCallCount$.pipe(
    scan((count, change) => Math.max(count + change, 0), 0),
    switchMap((count) => {
      if (count > 0) {
        return of(true);
      } else {
        return timer(300).pipe(map(() => false));
      }
    })
  );

  showLoading() {
    this.apiCallCount$.next(1);
  }

  hideLoading() {
    this.apiCallCount$.next(-1);
  }
}
