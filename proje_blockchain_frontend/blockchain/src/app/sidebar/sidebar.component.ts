import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: any[];

  constructor() {
    this.items = [
      {label: 'Block Create', routerLink: ['/block']},
      {label: 'Chain View', routerLink: ['/chain']},
      {label: 'Miner', routerLink: ['/miner']}
    ];
  }

  ngOnInit(): void {
  }

}
