import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user/shared/model/user";
import {FormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {AuthenticationService} from "../user/shared/services/authentication-service";
import {Select, Store} from "@ngxs/store";
import {AuthState} from "../user/shared/state/auth/auth.state";
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
      console.log(data);

      this.user = data;
      console.log(this.user);
    })
  }
  @Select(AuthState.getUser) currentUser: Observable<User>;

  user: User;

  userinfo = this.authenticationService.getUser();
  userName = this.authenticationService.getUserName();
  // currentUser = this.authenticationService.getToken();
  userMail = this.authenticationService.getUserMail();




  ngOnInit(): void {
  }

  back() {
    this.location.back();
  }
}
