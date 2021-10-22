import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../user/shared/services/authentication-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {


  constructor(private authenticationService: AuthenticationService, private  router: Router) { }
  currentUser = this.authenticationService.getToken();
  // @ts-ignore
  LoggedIn: boolean;
  // isAdmin: boolean;
  /** Boolean values are used to store true or false values.*/


  ngOnInit(): void {
    this.authenticationService.isLoggedIn().subscribe(loggedIn => this.LoggedIn = loggedIn);
  }

}
