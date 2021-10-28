import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/services/product.service";
import {Router} from "@angular/router";
import {Product} from "../shared/model/product";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 products$ : Product[] | undefined;

  constructor( private productService : ProductService,
               private  router: Router) { }

  ngOnInit(): void {
      this.productService.readAllProducts()
      .subscribe(listOfProducts => {
      this.products$ = listOfProducts;
      });

  }



}
