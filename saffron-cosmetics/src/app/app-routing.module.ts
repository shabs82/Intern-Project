import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent} from "./welcome-page/welcome-page.component";
import { ContactUsComponent} from "./shared/contact-us/contact-us.component";
import { LoginComponent} from "./user-account/login/login.component";


const routes: Routes = [{ path: 'eyes', loadChildren: () => import('./eyes/eyes.module').then(m => m.EyesModule) },
  { path: 'lips', loadChildren: () => import('./lips/lips.module').then(m => m.LipsModule) },
  { path: 'nails', loadChildren: () => import('./nails/nails.module').then(m => m.NailsModule) },
  { path: 'giftsets', loadChildren: () => import('./giftsets/giftsets.module').then(m => m.GiftsetsModule) },
  { path: 'fragrance', loadChildren: () => import('./fragrance/fragrance.module').then(m => m.FragranceModule) },
  { path: '', component: WelcomePageComponent},
  { path: 'makeup', loadChildren: () => import('./makeup/makeup.module').then(m => m.MakeupModule) },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'user-account', component: LoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
