import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TopnavbarComponent } from './shared/topnavbar/topnavbar.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BottomFooterComponent } from './shared/bottom-footer/bottom-footer.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgxCaptchaModule } from 'ngx-captcha';
import { SignUpComponent } from './user/login/sign-up/sign-up.component';
import {AuthenticationService} from "./user/shared/services/authentication-service";
import {LoginComponent} from "./user/login/login.component";
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {NgxsModule} from "@ngxs/store";
import {AuthState} from "./user/shared/state/auth/auth.state";
import {environment} from "../environments/environment";
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";

import {ShoppingCartService} from "./shopping-cart/shared/shopping-cart.service";
import {SearchModule} from "./search/search.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { WishlistComponent } from './wishlist/wishlist.component';
import { DiscountLineComponent } from './welcome-page/discount-line/discount-line.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TopnavbarComponent,
    WelcomePageComponent,
    BottomFooterComponent,
    ContactUsComponent,
    SignUpComponent,
    UserUpdateComponent,
    ShoppingCartComponent,
    WishlistComponent,
    DiscountLineComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgbAlertModule,
    NgxCaptchaModule,
    FormsModule,
    SearchModule,
    NgxsModule.forRoot([AuthState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: ['auth']
    }),
  ],
  providers: [AuthenticationService, ShoppingCartService],
  exports: [
    SignUpComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
