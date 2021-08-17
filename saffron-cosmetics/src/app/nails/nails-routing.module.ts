import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NailsComponent } from './nails.component';

const routes: Routes = [{ path: '', component: NailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NailsRoutingModule { }
