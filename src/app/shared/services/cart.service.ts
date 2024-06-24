import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartChange$ = new Subject();

  get cartChange$() {
    return this._cartChange$.asObservable();
  }

  update() {
    this._cartChange$.next('');
  }
}
