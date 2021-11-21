import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product/shared/services/product.service";
import {Product} from "../../product/shared/model/product";
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  eyeArray = [{id:8,label:'Eye Shadow'}, {id:9,label:'Eye Liner'}, {id:10,label:'Eye Lenses'}, {id:11,label:'Eyebrows'}, {id:12,label:'Mascara'}, {id:14,label:'Eye Pencil'},
    {id:15,label:'Eye Lashes'}, {id:23,label:'Kajal & Eye Shade'}]

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
  }

  selectChangeLink(event: { target: any; srcElement: any; currentTarget: any; }) {
    var target = event.target || event.srcElement || event.currentTarget;
    var secondaryClassId = target.attributes.id.value;
    this.router.navigate(['/product/product-list', secondaryClassId])
  }
}
