import { Component, OnInit } from '@angular/core';
import {ProductService} from "./shared/services/product.service";
import {Product} from "./shared/model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productsByCategoryId: Product[] | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsBySecondaryClassId(4).then( (data) => {
      console.log(data);
      this.productsByCategoryId = data;
    });
  }

}
