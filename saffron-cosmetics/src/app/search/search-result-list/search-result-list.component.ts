import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {ShoppingCartService} from "../../shopping-cart/shared/shopping-cart.service";
import {Product} from "../../product/shared/model/product";
import {ProductService} from "../../product/shared/services/product.service";
import {SearchOption} from "../searchOption";
import {WishlistService} from "../../wishlist/shared/wishlist.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export class SearchResultListComponent implements OnInit {
    addedToWishlist: boolean = false;

  constructor(public searchService: SearchService, private cartService: ShoppingCartService,
              private prodService: ProductService, private wishlistService: WishlistService,
              private router: Router) {}

  ngOnInit(): void {}

  async addToCart(product: SearchOption) {
    if(product.id != null){
      await this.prodService.getProductById(product.id).subscribe(p => this.cartService.addToCart(p))
    }

  }


  removeFromFavourites(item: SearchOption) {
    this.wishlistService.removeFromWishlist(item);
    this.addedToWishlist = false;
  }
  // refreshPage() {
  //   window.location.reload();
  // }

  addToFavourites(item: SearchOption) {
    this.wishlistService.addToWishList(item);
    this.addedToWishlist = true;
  }

  backToDetail(item: any) {
    this.router.navigate(['/product/product-detail', item.id]);

  }
}
