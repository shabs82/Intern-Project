import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../user/shared/services/authentication-service";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common'
import {UserService} from "../user/shared/services/user.service";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  id: number;

  updateForm = new FormGroup({
    name : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl(''),
    pwd : new FormControl(''),
    address : new FormControl(''),
    postCode : new FormControl(''),
    phoneNumber: new FormControl('')

  });

  constructor(private userService: UserService, private authenticationService: AuthenticationService,
              private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.id = parseInt(this.authenticationService.getUserID());
    this.userService.readUserById(this.id).subscribe(userFromRest => {
      console.log(userFromRest)
      this.updateForm.patchValue({
        name : userFromRest.firstName,
        lastName : userFromRest.lastName,
        email : userFromRest.username,
        pwd : userFromRest.password,
        address : userFromRest.address,
        postCode : userFromRest.postCode,
        phoneNumber: userFromRest.phoneNumber
      });
    });
  }

  saveChanges() {
    const user = this.updateForm.value;
    user.id = this.id;
    this.userService.updateUser(user);
    this.router.navigateByUrl('/');
  }

  back(): void {
    this.location.back();
  }
}
