import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import { MessagesComponent } from './components/messages/messages.component';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MessagesComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
