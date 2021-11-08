import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../user/shared/services/authentication-service";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common'

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

  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = +this.route.snapshot.paramMap.get('id');
    this.authService.readUserById(this.id).subscribe(userFromRest => {
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
  // get f(): any { return this.updateForm.controls; }
  saveChanges() {
    const user = this.updateForm.value;
    user.id = this.id;
    this.authService.updateUser(user);
    //   .then(() => {
    //   this.router.navigateByUrl('/');
    // });
    this.router.navigateByUrl('/');
  }

  back(): void {
    this.location.back();
  }
}
