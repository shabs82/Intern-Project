import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxCaptchaModule } from 'ngx-captcha';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import {NgbButtonsModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";
import {AppModule} from "../app.module";
import {SignUpComponent} from "./login/sign-up/sign-up.component";
import {UserUpdateComponent} from "./user-update/user-update.component";
import {NgxsModule} from "@ngxs/store";
import {AuthState} from "./shared/state/auth/auth.state";
import {environment} from "../../environments/environment";
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";
import {UserDetailComponent} from "./user-detail/user-detail.component";


@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    SignUpComponent,
    UserUpdateComponent,
    UserDetailComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbButtonsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
  ],
  exports: [
    SignUpComponent
  ],
})
export class UserModule { }
