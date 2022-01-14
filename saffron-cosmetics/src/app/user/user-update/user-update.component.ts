import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../shared/services/authentication-service";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common'
import {UserService} from "../shared/services/user.service";
import {Select, Store} from "@ngxs/store";
import {UpdateUser} from "../shared/state/auth/auth.action";
import {AuthState} from "../shared/state/auth/auth.state";
import {Observable} from "rxjs";
import {User} from "../shared/model/user";

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
    address : new FormControl(''),
    postCode : new FormControl(''),
    phoneNumber: new FormControl('')
  });

  constructor(private userService: UserService, private authenticationService: AuthenticationService,
              private router: Router, private route: ActivatedRoute, private location: Location, private store: Store) {
    //Store is DIed to dispatch actions.

    // this.currentUser.subscribe((data) =>{
    //   console.log(data);
    //   this.user = data;
    //   console.log(this.user);
    // })
  }

  ngOnInit(): void {
    //Once component is initiated
    //Gets the ID
    this.id = parseInt(this.authenticationService.getUserID());
    //Reads the user with the ID and then manipulates the data to store them in the form fields.
    this.userService.readUserById(this.id).subscribe(userFromRest => {
      this.user = userFromRest;
      this.updateForm.patchValue({
        firstName : userFromRest.firstName,
        lastName : userFromRest.lastName,
        email : userFromRest.email,
        address : userFromRest.address,
        postCode : userFromRest.postCode,
        phoneNumber: userFromRest.phoneNumber
      });
    });

    // this.currentUser.subscribe((data)=> {
    //   this.user = data;
    //   this.updateForm.patchValue({
    //     firstName: this.user.firstName,
    //     lastName: this.user.lastName,
    //     email: this.user.email,
    //     address: this.user.address,
    //     postCode: this.user.postCode,
    //     phoneNumber: this.user.phoneNumber
    //   });
    // })
  }
  @Select(AuthState.getUser) currentUser: Observable<User>;
  user: User;



  async saveChanges() {
    const user = this.updateForm.value;
    user.id = this.id;
    //await this.userService.updateUser(user).subscribe(() => {this.router.navigateByUrl('/');});
    //Dispatches an action from the store, once method is done, navigated to user-details
    await this.store.dispatch(new UpdateUser(user)).subscribe(()=> {this.router.navigateByUrl('/user/user-details')});
  }

  back(): void {
    this.location.back();
  }
}
