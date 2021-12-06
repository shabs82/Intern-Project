import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/state/auth/auth.service";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Store} from "@ngxs/store";
import {ResetPassword} from "../shared/state/auth/auth.action";
import {UserDto} from "../shared/dtos/user-dto";
import { AlertService } from 'ngx-alerts';




@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  mailForm!: FormGroup;
  restPassForm!: FormGroup;
  submitted = false;
  loading = false;
  errormessage = '';

  // @ts-ignore
  fieldTextType: boolean;
  userExists = false;
  constructor(private authenticationService: AuthService, private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.mailForm= this.formBuilder.group({
      email:['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(200)])],
    })
  }

  get f(): any { return this.mailForm.controls; }






  sendResetMail(mailInput: UserDto) {
    //this.authenticationService.forgotPassword();
    this.submitted = true;
    if (this.mailForm.invalid){
      return;
    }
    this.store.dispatch(new ResetPassword(mailInput));

  }
}
