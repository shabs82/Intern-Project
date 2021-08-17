import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EyesRoutingModule } from './eyes-routing.module';
import { EyesComponent } from './eyes.component';


@NgModule({
  declarations: [
    EyesComponent
  ],
  imports: [
    CommonModule,
    EyesRoutingModule
  ]
})
export class EyesModule { }
