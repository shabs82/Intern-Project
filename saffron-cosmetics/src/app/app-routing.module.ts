import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent} from "./welcome-page/welcome-page.component";
import { ContactUsComponent} from "./shared/contact-us/contact-us.component";
import {LoginComponent} from "./user/login/login.component";
import {SignUpComponent} from "./user/login/sign-up/sign-up.component";



const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'login', component: LoginComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
