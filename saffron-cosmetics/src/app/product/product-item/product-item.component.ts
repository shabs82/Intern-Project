import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../shared/model/product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  constructor(private route:ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {

  }

  addToCart() {

  }
}
