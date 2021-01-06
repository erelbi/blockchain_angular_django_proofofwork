import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { BlockCreateComponent } from "./block-create/block-create.component";
import { ChainViewComponent } from "./chain-view/chain-view.component";
import { MinerComponent } from "./miner/miner.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', component: ChainViewComponent }
    ]
  },
  {
    path: 'chain', component: MainComponent,
    children: [
      { path: '', component: ChainViewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
