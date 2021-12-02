import { Component, OnInit } from '@angular/core';
import {SelectedProductOrderModel} from "./shared/selected-product-order.model";
import {ShoppingCartService} from "./shared/shopping-cart.service";
import {Subscription} from "rxjs";
import {Product} from "../product/shared/model/product";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  usersSelectedProducts : SelectedProductOrderModel[] = [];
  totalPrice: number;
  private totalPriceSub: Subscription;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.usersSelectedProducts = JSON.parse(<string>localStorage.getItem('selectedProductOrders'));
    debugger;
    this.totalPriceSub = this.cartService.totalPrice$.subscribe(totalPrice => {
      this.totalPrice = totalPrice;
    });
  }

  removeProductFromShoppingCart(product: Product) {
    this.cartService.removeWholeProductFromCart(product);
    this.usersSelectedProducts = this.cartService.loadOrderedProducts();
  }

  removeOneQuantityOfSelectedProductFromCart(product: Product) {
    this.cartService.removeOneQuantityOfSelectedProductFromCart(product);
    this.usersSelectedProducts = this.cartService.loadOrderedProducts();
  }

  addOneQuantityOfSelectedProductToCart(product: Product) {
    this.cartService.addToCart(product);
    this.usersSelectedProducts = this.cartService.loadOrderedProducts();
  }
}
