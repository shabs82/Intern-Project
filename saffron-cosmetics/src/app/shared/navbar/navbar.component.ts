import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product/shared/services/product.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  selectChangeLink(event: { target: any; srcElement: any; currentTarget: any; }) {
    var target = event.target || event.srcElement || event.currentTarget;
    var secondaryClassId = target.attributes.id.value;
    debugger;
    this.productService.sendSecondaryClassId(secondaryClassId);
    console.log(secondaryClassId)
  }
}
