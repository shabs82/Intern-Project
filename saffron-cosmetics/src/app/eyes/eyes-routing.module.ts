import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EyesComponent } from './eyes.component';

const routes: Routes = [{ path: '', component: EyesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EyesRoutingModule { }
