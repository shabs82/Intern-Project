import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../shared/model/product";
import {ProductService} from "../shared/services/product.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  productsByCategoryId: Product[] | undefined;

  constructor( private productService : ProductService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.refresh();

  }

  async refresh(): Promise<void> {
    let secondaryClassId = parseInt(<string>this.route.snapshot.paramMap.get('secondaryClassId'))
    this.productsByCategoryId = await this.productService.getProductsBySecondaryClassId(secondaryClassId);
    console.log(this.productsByCategoryId)
  }


  selectSingleProduct(product: Product) {
    this.router.navigate(['/product/product-detail', product.id])


  }
}
