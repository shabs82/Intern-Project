import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent} from "./welcome-page/welcome-page.component";
import { ContactUsComponent} from "./shared/contact-us/contact-us.component";



const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
