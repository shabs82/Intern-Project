import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../shared/model/product";
import {ProductService} from "../shared/services/product.service";
import {WishlistService} from "../../wishlist/shared/wishlist.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  productsByCategoryId: Product[] | undefined;
  secCatId = 0;
  alert: boolean = false;


  constructor( private productService : ProductService, private route: ActivatedRoute,
              private router: Router, private wishListService: WishlistService) {
  }

  ngOnInit(): void {

    this.refresh();

  }

  async refresh(): Promise<void> {
    let secondaryClassId = parseInt(<string>this.route.snapshot.paramMap.get('secondaryClassId'))
    this.productsByCategoryId = await this.productService.getProductsBySecondaryClassId(secondaryClassId);
    console.log(secondaryClassId);
    let newLocation = `/pathName/${secondaryClassId}`;
    // override default re-use strategy
    this.router
      .routeReuseStrategy
      .shouldReuseRoute = function () {
      return false;
    };
    this.router
      .navigateByUrl(newLocation)
      .then(
        (worked) => {
          //works only because we hooked
          //the routeReuseStrategy.shouldReuseRoute above
        },
        (error) => {
        }
      );
  }


  selectSingleProduct(product: Product) {
    this.router.navigate(['/product/product-detail', product.id])
  }


  closeAlert() {
    this.alert = false;
  }
}

