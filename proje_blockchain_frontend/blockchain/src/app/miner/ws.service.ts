
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class WsService {
  private socket;
  constructor(private router: Router ) {
    this.socket = new WebSocket(
      // "ws://localhost:8000/ws" + this.router.url + "/"
      'ws://localhost:8000/mining/'
    );
  }
  sendMessage(message: string) {
    this.socket.send(JSON.stringify({ message: message }));
  }
  onMessage(): Observable<Object> {
    return Observable.create(observer => {
      this.socket.onmessage = event => {
        observer.next(JSON.parse(event.data));
      };
    });
  }
}
