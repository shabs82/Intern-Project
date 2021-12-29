import { Component, OnInit } from '@angular/core';
import {WishlistService} from "./shared/wishlist.service";
import {Product} from "../product/shared/model/product";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  productsInFavourites: Product[] = [];

  constructor(private wishListService: WishlistService) { }

  ngOnInit(): void {
    this.productsInFavourites = this.wishListService.loadFavouriteProducts()


  }

}
