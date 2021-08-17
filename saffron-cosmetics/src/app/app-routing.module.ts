import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'eyes', loadChildren: () => import('./eyes/eyes.module').then(m => m.EyesModule) }, { path: 'lips', loadChildren: () => import('./lips/lips.module').then(m => m.LipsModule) }, { path: 'nails', loadChildren: () => import('./nails/nails.module').then(m => m.NailsModule) }, { path: 'giftsets', loadChildren: () => import('./giftsets/giftsets.module').then(m => m.GiftsetsModule) }, { path: 'fragrance', loadChildren: () => import('./fragrance/fragrance.module').then(m => m.FragranceModule) }, { path: 'makeup', loadChildren: () => import('./makeup/makeup.module').then(m => m.MakeupModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
