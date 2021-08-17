import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FragranceComponent } from './fragrance.component';

const routes: Routes = [{ path: '', component: FragranceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FragranceRoutingModule { }
