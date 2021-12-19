import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../shared/services/authentication-service";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common'
import {UserService} from "../shared/services/user.service";
import {Store} from "@ngxs/store";
import {UpdateUser} from "../shared/state/auth/auth.action";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  id: number;

  updateForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    address : new FormControl(''),
    postCode : new FormControl(''),
    phoneNumber: new FormControl('')
  });

  constructor(private userService: UserService, private authenticationService: AuthenticationService,
              private router: Router, private route: ActivatedRoute, private location: Location, private store: Store) { }

  ngOnInit(): void {
    this.id = parseInt(this.authenticationService.getUserID());
    this.userService.readUserById(this.id).subscribe(userFromRest => {
      console.log(userFromRest)
      this.updateForm.patchValue({
        firstName : userFromRest.firstName,
        lastName : userFromRest.lastName,
        email : userFromRest.email,
        // pwd : userFromRest.password,
        address : userFromRest.address,
        postCode : userFromRest.postCode,
        phoneNumber: userFromRest.phoneNumber
      });
    });
  }

  async saveChanges() {
    const user = this.updateForm.value;
    user.id = this.id;
    //await this.userService.updateUser(user).subscribe(() => {this.router.navigateByUrl('/');});
    await this.store.dispatch(new UpdateUser(user)).subscribe(()=> {this.router.navigateByUrl('/')});
  }

  back(): void {
    this.location.back();
  }
}
