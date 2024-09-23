import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLayoutComponent} from "../../shared/layouts/auth-layout/auth-layout.component";
import {LoginComponent} from "./components/login/login.component";
import {AppLayoutComponent} from "../../shared/layouts/app-layout/app-layout.component";
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },

  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
