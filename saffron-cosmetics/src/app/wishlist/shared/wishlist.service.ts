import { Injectable } from '@angular/core';
import {Product} from "../../product/shared/model/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  productsInFavourites: Product[] = [];

  constructor() {

  }


  saveChanges(): void{
    localStorage.setItem('favouriteProducts', JSON.stringify(this.productsInFavourites));

  }


  removeFromWishlist(productItem: Product) {



  }

  addToWishList(productItem: Product) {
    this.productsInFavourites.push(productItem)
    this.saveChanges()


  }
}
