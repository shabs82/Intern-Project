import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../shared/model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {WishlistService} from "../../wishlist/shared/wishlist.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;
  addedToWishlist: boolean = false;

  constructor(private route:ActivatedRoute, private router:Router, private wishlistService: WishlistService) {
  }

  ngOnInit(): void {

  }

  addToCart() {

  }

  handleRemoveFromWishlist(productItem : Product) {
    this.wishlistService.removeFromWishlist(productItem)
    this.addedToWishlist = false;

  }

  handleAddToWishlist(productItem: Product) {
    this.wishlistService.addToWishList(productItem)
    this.addedToWishlist = true;

  }
}
