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
  user = this.authenticationService.getUserName();
  // @ts-ignore
  isLoggedIn: boolean;
  // @ts-ignore
  isAdmin: boolean;
  /** Boolean values are used to store true or false values.*/

  logout(): any {
    this.authenticationService.logout();
    this.router.navigate(['/']);
    window.location.reload();
  }

  refresh(): void{
    window.location.reload();
  }

  ngOnInit(): void {
    this.authenticationService.isLoggedIn().subscribe(loggedIn => this.isLoggedIn = loggedIn);
    this.authenticationService.isLogAdmin().subscribe(loggedIn => this.isAdmin = loggedIn);
  }

}
