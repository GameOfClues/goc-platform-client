import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { UsersComponent } from './components/users/users.component';
import {RouterModule} from "@angular/router";
import { AddUserComponent } from './components/add-user/add-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AdministrationService} from "./services/administration.service";
import { FaqComponent } from './components/faq/faq.component';
import { AddFaqComponent } from './components/add-faq/add-faq.component';
import { UpdateFaqComponent } from './components/update-faq/update-faq.component';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    FaqComponent,
    AddFaqComponent,
    UpdateFaqComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AdministrationRoutingModule
  ],
  providers: [
    AdministrationService
  ]
})
export class AdministrationModule { }
