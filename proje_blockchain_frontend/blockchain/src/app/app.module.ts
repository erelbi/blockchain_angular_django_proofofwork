import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BlockCreateComponent } from './block-create/block-create.component';
import { ChainViewComponent } from './chain-view/chain-view.component';
import { MinerComponent } from './miner/miner.component';
import { ContentComponent } from './content/content.component';
import { MenuModule } from 'primeng/menu';
import { MainComponent } from './main/main.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    BlockCreateComponent,
    ChainViewComponent,
    MinerComponent,
    ContentComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    TimelineModule,
    CardModule,
    DialogModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
