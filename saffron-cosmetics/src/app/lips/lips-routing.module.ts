import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LipsComponent } from './lips.component';

const routes: Routes = [{ path: '', component: LipsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LipsRoutingModule { }
