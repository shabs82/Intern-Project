import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import {WishlistService} from "../../wishlist/shared/wishlist.service";
import {ProductService} from "../../product/shared/services/product.service";
import {SearchOption} from "../searchOption";
import {ShoppingCartService} from "../../shopping-cart/shared/shopping-cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent implements OnInit {
  addedToWishlist: boolean = false;
  alert: boolean = false;

  constructor(public searchService: SearchService, private prodService: ProductService,
              private wishlistService: WishlistService,private cartService: ShoppingCartService,
              private router: Router) {
  }

  ngOnInit(): void {

  }
  // refreshPage() {
  //   window.location.reload();
  // }

  addToFavourites(selectedOption: any) {
    this.wishlistService.addToWishList(selectedOption);
    this.addedToWishlist = false;
    // this.refreshPage();
    this.alert = true;
  }

  removeFromFavourites(selectedOption: any) {
    this.wishlistService.removeFromWishlist(selectedOption);
    this.addedToWishlist = false;
    // this.refreshPage();

  }

  async addToCart(product: SearchOption) {
    if(product.id != null){
      await this.prodService.getProductById(product.id).subscribe(p => this.cartService.addToCart(p))
    }

  }

  // backToDetail(selectedOption: any) {
  //   this.router.navigate(['/product/product-detail', selectedOption.id]);
  //
  // }

  closeAlert() {
    this.alert = false;
  }
}
