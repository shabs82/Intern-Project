import { Injectable } from '@angular/core';
import {Product} from "../../product/shared/model/product";
import {Observable} from "rxjs";
import {SelectedProductOrderModel} from "../../shopping-cart/shared/selected-product-order.model";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  productsInFavourites: Product[] = [];

  constructor() {
    this.productsInFavourites = this.loadFavouriteProducts()

  }


  saveChanges(): void{
    localStorage.setItem('favouriteProducts', JSON.stringify(this.productsInFavourites));

  }
  loadFavouriteProducts(): Product[] {
    return JSON.parse(<string>localStorage.getItem('favouriteProducts'));
  }


  removeFromWishlist(productItem: Product) {
    // @ts-ignore
    this.productsInFavourites.splice(productItem)


  }

  addToWishList(productItem: Product) {
    this.productsInFavourites.push(productItem)
    this.saveChanges()


  }
}
