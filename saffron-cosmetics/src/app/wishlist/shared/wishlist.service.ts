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
    if(JSON.parse(<string>localStorage.getItem('favouriteProducts')) != null)
    return JSON.parse(<string>localStorage.getItem('favouriteProducts'));
    else
      return [];
  }


  removeFromWishlist(productItem: Product) {
    const currentFavouriteProduct = this.productsInFavourites.find(p => p.id === productItem.id);
    this.productsInFavourites.forEach((p: Product, index) => {
      if (p === currentFavouriteProduct) {
        this.productsInFavourites.splice(index, 1);
      }
    });
    this.saveChanges();
  }

  addToWishList(productItem: Product) {
      const currentFavouriteProduct = this.productsInFavourites.find(p => p.id === productItem.id);
      if (!currentFavouriteProduct) {
        this.productsInFavourites.push(productItem)
        this.saveChanges()
      }
  }

}
