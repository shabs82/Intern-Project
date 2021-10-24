import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../shared/services/authentication-service";

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

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private http: HttpClient,
              private  router: Router) { }

  ngOnInit(): any {
    this.loginForm2 = this.formBuilder.group({
      email : ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(200)])],
      pwd : ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
    });
  }
  get f(): any { return this.loginForm2.controls; }

  logIn() {
    this.submitted = true;
    if (this.loginForm2.invalid){
      return;
    }
    this.loading = true;

    console.log(this.loginForm2.value.email, this.loginForm2.value.pwd);
    this.authenticationService.login(this.loginForm2.value.email, this.loginForm2.value.pwd).subscribe(success => {
      //window.location.reload();
      this.router.navigate(['/']);

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
