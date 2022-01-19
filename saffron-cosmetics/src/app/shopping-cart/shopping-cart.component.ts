import { Component, OnInit } from '@angular/core';
import {SelectedProductOrderModel} from "./shared/selected-product-order.model";
import {ShoppingCartService} from "./shared/shopping-cart.service";
import {Subject, Subscription} from "rxjs";
import {Product} from "../product/shared/model/product";
import {takeUntil} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  usersSelectedProducts : SelectedProductOrderModel[] = [];
  totalPrice: number;
  private totalPriceSub: Subscription;

  constructor(private cartService: ShoppingCartService, private router:Router) { }

  ngOnInit(): void {
    this.usersSelectedProducts = JSON.parse(<string>localStorage.getItem('selectedProductOrders'));
    this.totalPriceSub = this.cartService.totalPrice$
            .subscribe(totalPrice => {
              this.totalPrice = totalPrice;
            });
  }

  ngOnDestroy(){
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

  goToPayment() {
    this.router.navigate(['shopping-cart/payment'])
  }

  backToDetail(product: SelectedProductOrderModel) {
    debugger;
    this.router.navigate(['/product/product-detail',product.product.id]);
  }
}
