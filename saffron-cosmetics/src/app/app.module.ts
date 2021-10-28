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

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgbAlertModule,
    NgxCaptchaModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
