import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import {ListComponent} from "./list/list.component";

const routes: Routes = [{ path: '', component: ProductComponent },
                        { path: 'product-list/:secondaryClassId', component: ListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
