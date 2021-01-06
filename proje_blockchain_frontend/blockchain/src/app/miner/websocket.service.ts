import { Injectable } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  getWs() {
    return webSocket('ws://localhost:8000/mining/').asObservable();
  }

}
