import { Component, OnInit } from '@angular/core';
import {SelectedProductOrderModel} from "./shared/selected-product-order.model";
import {ShoppingCartService} from "./shared/shopping-cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  usersSelectedProducts : SelectedProductOrderModel[] = [];

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.usersSelectedProducts = JSON.parse(<string>localStorage.getItem('selectedProductOrders'));
  }

  removeProductFromShoppingCart(id: number | undefined) {
    this.cartService.removeFromCart(id);
  }
}
