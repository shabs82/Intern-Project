import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../user/shared/services/authentication-service";
import {Router} from "@angular/router";
import {AuthState} from "../../user/shared/state/auth/auth.state";
import {Observable, Subscription} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {User} from "../../user/shared/model/user";
import {Logout} from "../../user/shared/state/auth/auth.action";
import {ShoppingCartService} from "../../shopping-cart/shared/shopping-cart.service";

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {
  favouriteItems: any;
  totalQuantity: number;
  private totalQuantitySub: Subscription;

  constructor(private store: Store, private  router: Router, private cartService: ShoppingCartService) {
    this.currentUser.subscribe((data) =>{
      //console.log(data);
      this.user = data;
    })
    this.totalQuantitySub = this.cartService.quantity$.subscribe(totalQuantity => {
      this.totalQuantity = totalQuantity;
    });

  }

  @Select(AuthState.getUser) currentUser: Observable<User>;
  user: User;

  /** Boolean values are used to store true or false values.*/

  logout(): any {
    this.store.dispatch(new Logout()).subscribe(success => {
        //window.location.reload();
        this.router.navigate(['/']);
        //window.location.reload();
      },
      error => {
      });
  }

  refresh(): void{
  }

  ngOnInit(): void {
  }

}
