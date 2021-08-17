import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeupRoutingModule } from './makeup-routing.module';
import { MakeupComponent } from './makeup.component';


@NgModule({
  declarations: [
    MakeupComponent
  ],
  imports: [
    CommonModule,
    MakeupRoutingModule
  ]
})
export class MakeupModule { }
