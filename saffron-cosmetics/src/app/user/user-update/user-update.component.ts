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

  //Specify the form we're using and the fields.
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

  }

  ngOnInit(): void {
    //Once component is initiated
    //Gets the ID
    this.id = parseInt(this.authenticationService.getUserID());
    //Reads the user with the ID and then manipulates the data to store them in the form fields.

      //Place the user's information from State, places them into the fields
      this.currentUser.subscribe((data) =>{
        this.user = data;
        this.updateForm.patchValue({
          firstName : this.user.firstName,
          lastName : this.user.lastName,
          email : this.user.email,
          address : this.user.address,
          postCode : this.user.postCode,
          phoneNumber: this.user.phoneNumber
        });

      })
  }
  //Selecting information from the state
  @Select(AuthState.getUser) currentUser: Observable<User>;
  user: User;


  async saveChanges() {
    //We retrieve the values of the user's input in the updateForm
    const user = this.updateForm.value;
    user.id = this.id;
    //await this.userService.updateUser(user).subscribe(() => {this.router.navigateByUrl('/');});
    //Dispatches an action from the store, once method is done, navigated to user-details
    //Subscribe is called to get a callback, navigating the user to another area.
    await this.store.dispatch(new UpdateUser(user)).subscribe(()=> {this.router.navigateByUrl('/user/user-details')});
  }

  back(): void {
    this.location.back();
  }
}
