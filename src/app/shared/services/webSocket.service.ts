import { inject, Injectable } from '@angular/core';
import { StorageService } from '@tmf/libs-shared/services';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private storageService = inject(StorageService);
  private socket: Socket;

  constructor() {
    const accessToken = this.storageService.getSessionItem('access_token');
    this.socket = io(environment.webSocketPath, {
      extraHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }

  // 監聽事件
  onEvent<T>(eventName: string): Observable<T> {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: T) => {
        subscriber.next(data);
      });

      return () => this.socket.off(eventName);
    });
  }

  // 發送事件
  emit<T>(eventName: string, data: T): void {
    this.socket.emit(eventName, data);
  }

  // 中斷連線
  disconnect(): void {
    this.socket.disconnect();
  }
}
