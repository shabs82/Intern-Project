import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../shared/services/authentication-service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  loading = false;
  errormessage = '';

  // @ts-ignore
  fieldTextType: boolean;


  currentUser = this.authenticationService.getToken();


  constructor(private authenticationService: AuthenticationService,private formBuilder: FormBuilder,
              private http: HttpClient,
              private  router: Router) { }

  ngOnInit(): any {
    this.loginForm = this.formBuilder.group({
      name : ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(200)])],
      lastName : ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      email : ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(200)])],
      pwd : ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
    });
  }

  get f(): any { return this.loginForm.controls; }

  signIn(): any{
    this.submitted = true;

    if (this.loginForm.invalid){
      return;
    }
    this.loading = true;

    console.log(this.loginForm.value.email, this.loginForm.value.pwd);
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.pwd,).subscribe(success => {
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
