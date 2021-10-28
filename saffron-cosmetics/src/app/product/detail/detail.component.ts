import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../shared/model/product";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  products$ : Product | undefined;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getProductById('id')
     .subscribe( product => {
        this.products$ = product
      });

  }

}
