import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from "../../shared/layouts/app-layout/app-layout.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuardService} from "../../core/guards/auth-guard.service";
import {MessagesComponent} from "./components/messages/messages.component";
import {IndexComponent} from "./components/index/index.component";

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    data: { roles: ['admin'] },
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
