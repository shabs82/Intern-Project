
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../shared/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../shared/model/product";
import {ShoppingCartService} from "../../shopping-cart/shared/shopping-cart.service";
import {WishlistService} from "../../wishlist/shared/wishlist.service";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  product: Product;
  addedToWishlist: boolean = false;
  alert: boolean = false;


  constructor(private productService: ProductService,
              private route: ActivatedRoute, private cartService: ShoppingCartService,
              private wishlistService: WishlistService, private router : Router ) {}

  ngOnInit(): void {
    this.route.params.subscribe((paramData)  =>{
      this.productService.getProductById(paramData['id'])
        .subscribe((product) =>{
          this.product = product;
        if(product.availability == -1 ){
          //Change the frontend button to out of stock.
        }
        console.log(product);
      })
    })
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  addToFavourites(product: Product) {
    this.wishlistService.addToWishList(product);
    this.addedToWishlist = true;
    //this.refreshPage();
    this.alert = true;
  }

  removeFromFavourites(product: Product) {
    this.wishlistService.removeFromWishlist(product);
    this.addedToWishlist = false;
    //this.refreshPage();

  }
  refreshPage() {
    window.location.reload();
  }

  closeAlert(){
    this.alert = false;
  }

}
