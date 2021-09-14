import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TopnavbarComponent } from './shared/topnavbar/topnavbar.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BottomFooterComponent } from './shared/bottom-footer/bottom-footer.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TopnavbarComponent,
    WelcomePageComponent,
    BottomFooterComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
