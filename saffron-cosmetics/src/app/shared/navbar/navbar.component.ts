import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product/shared/services/product.service";
import {Product} from "../../product/shared/model/product";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  productsByCategoryId: Product[] | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  async selectChangeLink(event: { target: any; srcElement: any; currentTarget: any; }) {
    var target = event.target || event.srcElement || event.currentTarget;
    var secondaryClassId = target.attributes.id.value;
    this.productsByCategoryId = await this.productService.getProductsBySecondaryClassId(secondaryClassId);
    debugger;
  }
}
