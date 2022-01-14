import {Component, Input, OnInit} from '@angular/core';
import {User} from "../shared/model/user";
import {FormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {AuthenticationService} from "../shared/services/authentication-service";
import {Select, Store} from "@ngxs/store";
import {AuthState} from "../shared/state/auth/auth.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  detailForm: FormGroup;

  constructor(private location: Location, private authenticationService: AuthenticationService, private store: Store,) {
    this.currentUser.subscribe((data) =>{
      this.user = data;
      console.log("User details page - user got updated")
      console.log(this.user);
    })
  }
  //Retrieves information from the State, sets it as currentUser
  @Select(AuthState.getUser) currentUser: Observable<User>;
  // User variable of the User Entity
  user: User;



  ngOnInit(): void {
  }

  back() {
    this.location.back();
  }
}
