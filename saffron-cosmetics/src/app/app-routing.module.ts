import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {WishlistComponent} from "./wishlist/wishlist.component";
import {PaymentComponent} from "./shopping-cart/payment/payment.component";
import {ContactUsComponent} from "./shared/contact-us/contact-us.component";



const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'wishlist', component: WishlistComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'shopping-cart/payment', component: PaymentComponent},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
