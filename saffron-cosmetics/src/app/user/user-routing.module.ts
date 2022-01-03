import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./login/sign-up/sign-up.component";
import {UserUpdateComponent} from "./user-update/user-update.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";


const routes: Routes = [{ path: '', component: UserComponent },
  { path: 'sign-up', component: SignUpComponent},
  { path: 'login', component: LoginComponent},
  { path: 'user-update', component: UserUpdateComponent},
  { path: 'user-details', component: UserDetailComponent},
  { path: 'change-password', component: ChangePasswordComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
