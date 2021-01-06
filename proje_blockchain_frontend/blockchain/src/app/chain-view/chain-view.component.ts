import { Component, OnInit } from '@angular/core';
import { ChainViewService } from './chain-view.service';
import { Block } from './block';
import { MessageService } from 'primeng/api';
import { BlockCreatorService } from '../block-create/block-creator.service';
import { MinerService } from '../miner/miner.service';
import { WebsocketService } from '../miner/websocket.service';

@Component({
  selector: 'app-chain-view',
  templateUrl: './chain-view.component.html',
  styleUrls: ['./chain-view.component.scss'],
  providers: [MessageService]
})
export class ChainViewComponent implements OnInit {

  creatorInput!: string;
  blocks: Block[] = [];
  mining: boolean = false;
  miningResult: MiningResult[] = [];
  miningString: string = "";
  isMiningDisable: boolean = true;

  constructor(private viewApi: ChainViewService,
    private messageService: MessageService,
    private creatorApi: BlockCreatorService,
    private minerService: MinerService,
    private webSocketService: WebsocketService,
  ) { }

  ngOnInit(): void {

    this.webSocketService.getWs().subscribe({
      next: (value: MiningResult) => {
        console.log('Websocket mesajı geldi' + JSON.stringify(value));
        this.miningString = value.resp + this.miningString;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('Complete Websocket');
      }
    });
    this.getBlocks();
  }

  createBlock() {
    if (this.creatorInput.length != 2) {
      this.messageService.add({
        severity: "error",
        detail: "Data should consist of two characters."
      });
      return;
    }

    this.creatorApi.createBlock(this.creatorInput).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('Complete');
        this.getBlocks();
        for (const block of this.blocks) {
          if (block.status === false) {
            this.isMiningDisable = false;
            console.log(block);
          }
        }
      }
    });
  }

  startMiner() {
    this.miningString = "";
    localStorage.clear();
    this.mining = true;
    this.minerService.getMiner().subscribe({
      complete: () => {
        this.getBlocks();
        this.mining = false;
      }
    });
  }

  getBlocks() {
    this.viewApi.getAllViews().subscribe({
      next: (response) => {
        this.blocks = response;
      },
      error: err => {
        console.log();
        this.messageService.add({ severity: 'error', summary: 'Api Error', detail: 'Blocks could not loaded from database' });
      },
      complete: () => {
        let newList = [];
        console.log("Blocks =>"+ this.blocks);
        for (const block of this.blocks) {
          if( block.status === false) {
            newList.push(block);
          }
        }        
        if (newList.length === 0) {
          this.isMiningDisable = true;
        } 
        else {
          this.isMiningDisable = false;
        }
      }
    });
  }
}

interface MiningResult {
  type: string;
  event: string;
  resp: string;
}
