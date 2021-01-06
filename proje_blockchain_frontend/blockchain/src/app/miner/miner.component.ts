import { Component, OnInit } from '@angular/core';
import {MinerService} from "./miner.service";
import {WebsocketService} from "./websocket.service";
import {WsService} from './ws.service';
@Component({
  selector: 'app-miner',
  templateUrl: './miner.component.html',
  styleUrls: ['./miner.component.scss']
})
export class MinerComponent implements OnInit {
  private  wsmsg: String = '';
  private miningResult: any[] = ['Results'];
  constructor(private minerService: MinerService, private webSocketService: WebsocketService, private ws: WsService) { }

  ngOnInit(): void {
    this.webSocketService.getWs().subscribe({
      next: value => {
        console.log('Websocket mesajı geldi' + JSON.stringify(value));
        // this.miningResult.push(JSON.stringify(value));
        // this.wsmsg += (value);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('Complete Websocket');
      }
    });
  }

  startMiner() {
    this.minerService.getMiner().subscribe({
      complete: () => {
        console.log('Complete Getting Miner');
      }
    });
  }
}
