import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {LoginComponent} from "./login/login.component";


const routes: Routes = [{ path: '', component: UserComponent },
                        { path: 'user', component: LoginComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
