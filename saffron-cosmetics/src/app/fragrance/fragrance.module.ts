import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FragranceRoutingModule } from './fragrance-routing.module';
import { FragranceComponent } from './fragrance.component';


@NgModule({
  declarations: [
    FragranceComponent
  ],
  imports: [
    CommonModule,
    FragranceRoutingModule
  ]
})
export class FragranceModule { }
