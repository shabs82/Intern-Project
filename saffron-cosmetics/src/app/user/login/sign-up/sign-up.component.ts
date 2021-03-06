import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../shared/services/authentication-service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {LoginUser, SignUp} from "../../shared/state/auth/auth.action";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  loginForm!: FormGroup;
  // @ts-ignore
  // aFormGroup: FormGroup;
  submitted = false;
  loading = false;
  errormessage = '';
  // @ts-ignore
  isAdmin: boolean;

  // @ts-ignore
  fieldTextType: boolean;


  currentUser = this.authenticationService.getToken();


  constructor(private authenticationService: AuthenticationService,private formBuilder: FormBuilder,
              private http: HttpClient,
              private  router: Router, private store:Store) { }

  ngOnInit(): any {
    this.loginForm = this.formBuilder.group({
      name : ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(200)])],
      lastName : ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      email : ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(200)])],
      pwd : ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
      address : ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      postCode : ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      phoneNumber : ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
      recaptcha: ['', Validators.required]
    });
  }

  siteKey:string = "6LfxJ-MdAAAAAD1TbSutpykFG6_npZ5CZUVrKsVN";


  get f(): any { return this.loginForm.controls; }

  signIn(): any{
    this.submitted = true;

    if (this.loginForm.invalid){
      return;
    }
    this.loading = true;

    console.log('Email', this.loginForm.value.email);
    console.log('Password',this.loginForm.value.pwd);
    console.log('First Name',this.loginForm.value.name);
    console.log('Last Name',this.loginForm.value.lastName);
    console.log('Address',this.loginForm.value.address);
    console.log('Post COde',this.loginForm.value.postCode);
    console.log('Phone Number',this.loginForm.value.phoneNumber);
    //this.loginForm.value.adminCheck
    // @ts-ignore
    this.store.dispatch(new SignUp({email: this.loginForm.value.email, password: this.loginForm.value.pwd, firstName: this.loginForm.value.name,
     lastName: this.loginForm.value.lastName, postCode: this.loginForm.value.postCode, address: this.loginForm.value.address, phoneNumber: this.loginForm.value.phoneNumber}))
      .subscribe(success =>{
      console.log('Success', success);
      this.router.navigate(['/user/login'])
        },
        error => {
        this.errormessage = error.message;
          this.loading = false;
        }
      )

  }

  toggleFieldTextType(): any {
    this.fieldTextType = !this.fieldTextType;
  }


  SignUpAlert() {
    alert("You're now part of the Saffron Cosmetics family,  please log in with your new account.")
  }
}
