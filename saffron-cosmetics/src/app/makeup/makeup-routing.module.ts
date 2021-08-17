import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeupComponent } from './makeup.component';

const routes: Routes = [{ path: '', component: MakeupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakeupRoutingModule { }
