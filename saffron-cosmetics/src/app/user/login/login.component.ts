import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../shared/services/authentication-service";
import {Select, Store} from "@ngxs/store";
import {LoginUser} from "../shared/state/auth/auth.action";
import {AuthState} from "../shared/state/auth/auth.state";
import {Observable} from "rxjs";
import {User} from "../shared/model/user";

@Component({
  selector: `app-login`,
  templateUrl: `./login.component.html`,
  styleUrls: [`./login.component.scss`]
})
export class LoginComponent implements OnInit {
  loginForm2!: FormGroup;
  submitted = false;
  loading = false;
  errormessage = '';

  // @ts-ignore
  fieldTextType: boolean;
  userExists = false;

  @Select(AuthState.getUser) currentUser: Observable<User>;

  constructor(private formBuilder: FormBuilder, private store:Store, private http: HttpClient,
              private  router: Router) {
    this.currentUser.subscribe((data) =>{
      if(data){
        this.router.navigate(['/']);
      }
    })
  }

  ngOnInit(): any {
    this.loginForm2 = this.formBuilder.group({
      email : ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(200)])],
      pwd : ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
      recaptcha: ['', Validators.required]
    });
  }
  get f(): any { return this.loginForm2.controls; }

  siteKey:string = "6LdNqg0dAAAAAG-tuIiGAPulOIkivnkKbKXtKtBp";

  logIn() {
    this.submitted = true;
    if (this.loginForm2.invalid){
      return;
    }
    this.loading = true;

    console.log(this.loginForm2.value.email, this.loginForm2.value.pwd);
    this.store.dispatch(new LoginUser(this.loginForm2.value.email, this.loginForm2.value.pwd))
      .subscribe(success => {
      //window.location.reload();
      //this.router.navigate(['/']);
      //window.location.reload();
      },
      error => {
        this.errormessage = error.message;
        this.loading = false;
      });
  }
  toggleFieldTextType(): any {
    this.fieldTextType = !this.fieldTextType;
  }
}
