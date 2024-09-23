import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AuthService} from "./services/auth.service";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS
    },
    JwtHelperService,
    AuthService
  ]
})
export class AuthModule { }
