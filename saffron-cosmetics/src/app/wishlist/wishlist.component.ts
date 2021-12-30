import { Component, OnInit } from '@angular/core';
import {WishlistService} from "./shared/wishlist.service";
import {Product} from "../product/shared/model/product";
import {ShoppingCartService} from "../shopping-cart/shared/shopping-cart.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  productsInFavourites: Product[] = [];


  constructor(private wishListService: WishlistService,
              private shoppingCartService : ShoppingCartService,
              private router : Router) { }

  ngOnInit(): void {
    this.productsInFavourites = this.wishListService.loadFavouriteProducts()


  }

  moveToBasket(favourite: Product) {
    this.wishListService.removeFromWishlist(favourite);
    this. shoppingCartService.addToCart(favourite);
    this.refreshPage();
  }

  removeFromFavourites(favourite: Product) {
    this.wishListService.removeFromWishlist(favourite);
    this.refreshPage();

  }
  refreshPage() {
    window.location.reload();
  }

  backToDetail(favourite: Product) {
    this.router.navigate(['/product/product-detail', favourite.id])
  }
}
