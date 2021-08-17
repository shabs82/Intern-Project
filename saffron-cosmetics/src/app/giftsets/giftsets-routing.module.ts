import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftsetsComponent } from './giftsets.component';

const routes: Routes = [{ path: '', component: GiftsetsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiftsetsRoutingModule { }
