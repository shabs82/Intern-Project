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
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  errormessage = '';

  currentUser = this.authenticationService.getToken();


  constructor(private authenticationService: AuthenticationService,private formBuilder: FormBuilder,
              private http: HttpClient,
              private  router: Router) { }

  ngOnInit(): any {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid){
      return;
    }
    this.loading = true;

    console.log('login');
    this.authenticationService.login(this.email?.value, this.password?.value).subscribe(success => {
        this.router.navigate(['/']);
      },
      error => {
        this.errormessage = error.message;
        this.loading = false;
      });
  }

}
