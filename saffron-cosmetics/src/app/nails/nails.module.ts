import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NailsRoutingModule } from './nails-routing.module';
import { NailsComponent } from './nails.component';


@NgModule({
  declarations: [
    NailsComponent
  ],
  imports: [
    CommonModule,
    NailsRoutingModule
  ]
})
export class NailsModule { }
