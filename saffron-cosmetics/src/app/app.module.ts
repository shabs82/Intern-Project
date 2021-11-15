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
import { DiscountsComponent } from './shared/discounts/discounts.component';
import { SignUpComponent } from './user/login/sign-up/sign-up.component';
import {AuthenticationService} from "./user/shared/services/authentication-service";
import {LoginComponent} from "./user/login/login.component";
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import {AuthState} from "./user/shared/state/auth/auth.state";
import {NgxsModule} from "@ngxs/store";
import {environment} from "../environments/environment";
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TopnavbarComponent,
    WelcomePageComponent,
    BottomFooterComponent,
    ContactUsComponent,
    DiscountsComponent,
    SignUpComponent,
    UserUpdateComponent,
    UserDetailComponent,
    ForgotPasswordComponent,

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
    NgxsModule.forRoot([AuthState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: ['']
    }),
  ],
  providers: [AuthenticationService],
  exports: [
    SignUpComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
