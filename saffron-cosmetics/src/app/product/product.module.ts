import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {NgbButtonsModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    ProductComponent,
    DetailComponent,
    ListComponent,
    ProductItemComponent
  ],
  exports: [
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgbButtonsModule
  ]
})
export class ProductModule { }
