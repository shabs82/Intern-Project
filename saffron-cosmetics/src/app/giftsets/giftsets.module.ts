import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiftsetsRoutingModule } from './giftsets-routing.module';
import { GiftsetsComponent } from './giftsets.component';


@NgModule({
  declarations: [
    GiftsetsComponent
  ],
  imports: [
    CommonModule,
    GiftsetsRoutingModule
  ]
})
export class GiftsetsModule { }
