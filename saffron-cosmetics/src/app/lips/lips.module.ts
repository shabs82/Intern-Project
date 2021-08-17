import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LipsRoutingModule } from './lips-routing.module';
import { LipsComponent } from './lips.component';


@NgModule({
  declarations: [
    LipsComponent
  ],
  imports: [
    CommonModule,
    LipsRoutingModule
  ]
})
export class LipsModule { }
