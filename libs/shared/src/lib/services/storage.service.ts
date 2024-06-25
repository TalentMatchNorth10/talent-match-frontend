import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private getItem(storage: Storage, key: string): any {
    const item = storage.getItem(key);
    try {
      return item ? JSON.parse(item) : null;
    } catch (error) {
      // console.error('Error parsing storage item', key, error);
      return item;
    }
  }

  private setItem(storage: Storage, key: string, value: any): void {
    try {
      storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // console.error('Error saving to storage', key, value, error);
    }
  }

  private removeItem(storage: Storage, key: string): void {
    try {
      storage.removeItem(key);
    } catch (error) {
      // console.error('Error removing storage item', key, error);
    }
  }

  public getSessionItem(key: string): any {
    return this.getItem(sessionStorage, key);
  }

  public setSessionItem(key: string, value: any): void {
    this.setItem(sessionStorage, key, value);
  }

  public removeSessionItem(key: string): void {
    this.removeItem(sessionStorage, key);
  }

  public getLocalItem(key: string): any {
    return this.getItem(localStorage, key);
  }

  public setLocalItem(key: string, value: any): void {
    this.setItem(localStorage, key, value);
  }

  public removeLocalItem(key: string): void {
    this.removeItem(localStorage, key);
  }

  public clearSessionStorage(): void {
    try {
      sessionStorage.clear();
    } catch (error) {
      // console.error('Error clearing sessionStorage', error);
    }
  }

  public clearLocalStorage(): void {
    try {
      localStorage.clear();
    } catch (error) {
      // console.error('Error clearing localStorage', error);
    }
  }
}
