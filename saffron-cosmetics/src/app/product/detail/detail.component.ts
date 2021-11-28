
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../shared/services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../shared/model/product";
import {ShoppingCartService} from "../../shopping-cart/shared/shopping-cart.service";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute, private cartService: ShoppingCartService) {}

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
}
