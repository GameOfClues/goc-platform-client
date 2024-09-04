import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./features/auth/auth.module";
import {CookieService} from "ngx-cookie-service";
import {CommonModule} from "@angular/common";
import {SharedModule} from "./shared/shared.module";
import {RouterModule} from "@angular/router";
import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeModule} from "./features/home/home.module";
import {HttpClientModule} from "@angular/common/http";
import {AdministrationModule} from "./features/administration/administration.module";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    AdministrationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
