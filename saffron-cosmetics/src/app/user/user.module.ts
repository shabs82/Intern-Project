import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import {NgbButtonsModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";
import {AppModule} from "../app.module";


@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbButtonsModule,
    ReactiveFormsModule,
    AppModule
  ]
})
export class UserModule { }
