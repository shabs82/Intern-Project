import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  passwordsMatch: boolean | false;

  pwChangeForm = new FormGroup({
    newPW : new FormControl(''),
    confirm : new FormControl(''),
  });

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {

  }

  changePassword() {
    debugger;
    if(this.pwChangeForm.value.newPW == this.pwChangeForm.value.confirm){
        this.userService.changePassword(this.pwChangeForm.value.newPW);
    }
    else{
      this.passwordsMatch = true;
    }
  }
}
