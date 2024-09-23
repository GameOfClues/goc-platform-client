import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from "../../shared/layouts/app-layout/app-layout.component";
import {UsersComponent} from "./components/users/users.component";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {FaqComponent} from "./components/faq/faq.component";
import {DashboardComponent} from "../home/components/dashboard/dashboard.component";
import {MessagesComponent} from "../home/components/messages/messages.component";
import {AuthGuardService} from "../../core/guards/auth-guard.service";
import {AddFaqComponent} from "./components/add-faq/add-faq.component";
import {UpdateFaqComponent} from "./components/update-faq/update-faq.component";

const routes: Routes = [
  {
    path: 'administration',
    canActivate: [AuthGuardService],
    data: { roles: ['admin'] },
    component: AppLayoutComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'users/add',
        component: AddUserComponent
      }
    ]
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'faq',
        component: FaqComponent
      },
      {
        path: 'faq/add',
        component: AddFaqComponent
      },
      {
        path: 'faq/update',
        component: UpdateFaqComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
