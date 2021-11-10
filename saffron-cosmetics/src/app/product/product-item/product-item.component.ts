import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../shared/model/product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  constructor() {
  }

  ngOnInit(): void {


  }

  addToCart() {

  }
}
