import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../shared/model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {WishlistService} from "../../wishlist/shared/wishlist.service";
import {SelectedProductOrderModel} from "../../shopping-cart/shared/selected-product-order.model";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;
  addedToWishlist: boolean = false;

  usersFavProducts : Product[] = [];

  constructor(private route:ActivatedRoute, private router:Router, private wishlistService: WishlistService) {
  }

  ngOnInit(): void {
    this.usersFavProducts = JSON.parse(<string>localStorage.getItem('favouriteProducts'));
    this.changeFavHeart();
  }

  changeFavHeart() {
    this.usersFavProducts.forEach((p) => {
      if (p.id === this.productItem.id) {
        this.addedToWishlist = true
      }
    });
  }

  handleRemoveFromWishlist(productItem : Product) {
    this.wishlistService.removeFromWishlist(productItem)
    this.addedToWishlist = false;
  }

  handleAddToWishlist(productItem: Product) {
    this.wishlistService.addToWishList(productItem)
    this.addedToWishlist = true;
  }

  selectSingleProduct(productItem: Product) {
    this.router.navigate(['/product/product-detail', productItem.id])
  }
}
