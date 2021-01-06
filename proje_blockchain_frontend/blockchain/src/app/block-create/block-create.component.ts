import { Component, OnInit } from '@angular/core';
import {BlockCreatorService} from './block-creator.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-block-create',
  templateUrl: './block-create.component.html',
  styleUrls: ['./block-create.component.scss']
})
export class BlockCreateComponent implements OnInit {

  creatorInput!: string;
  loading: boolean;
  constructor(private creatorApi: BlockCreatorService, private  router: Router) { }

  ngOnInit(): void {
  }
  create() {
    console.log(this.creatorInput);
    this.loading = true;
    this.creatorApi.createBlock(this.creatorInput).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('Complete');
        this.loading = false;
        this.router.navigateByUrl('chain')
      }
    });
  }

}
