import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/state/auth/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  mailForm!: FormGroup;
  submitted = false;
  loading = false;
  errormessage = '';

  // @ts-ignore
  fieldTextType: boolean;
  userExists = false;

  constructor(private authenticationService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): any {
    this.mailForm= this.formBuilder.group({
      email:['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(200)])],
    })
  }

  get f(): any { return this.mailForm.controls; }

  resetPassword() {
    this.authenticationService.forgotPassword();
    this.submitted = true;
    if (this.mailForm.invalid){
      return;
    }
    this.loading = true;



  }

  sendResetMail() {
    this.authenticationService.forgotPassword();
    this.submitted = true;
    if (this.mailForm.invalid){
      return;
    }
    this.loading = true;

  }
}
