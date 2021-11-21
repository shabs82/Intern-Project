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

  eyeArray = [{id:6,label:'Eye Shadow'}, {id:5,label:'Eye Liner'}, {id:4,label:'Eye Lenses'}, {id:3,label:'Eyebrows'}, {id:2,label:'Mascara'}, {id:1,label:'Eye Pencil'},
    {id:8,label:'Eye Lashes'}, {id:7,label:'Kajal & Eye Shade'}];

  lipsArray = [{id:10,label:'Lip Stick'}, {id:11,label:'Lip Gloss'}, {id:12,label:'Lip Liner'}, {id:13,label:'Lip Pencil'}];

  nailArray = [{id:14,label:'Nail Polish'}, {id:15,label:'Nail Accessories'}];

  faceArray = [{id:16,label:'Compact Powder'}, {id:17,label:'Foundation'}, {id:18,label:'Blushes'}, {id:19,label:'Concealer'}, {id:20,label:'Primer'}, {id:21,label:'Highlighters / Bronzing'} ];

  accessoriesArray = [{id:22,label:'Applicators'}, {id:23,label:'Brushes'}, {id:24,label:'Vanity Case'}];

  fragrancesArray = [{id:25,label:'Mens Perfume'}, {id:26,label:'Womens Fragrance'}, {id:27,label:'Unisex Fragrance'}];

  gifsetsArray = [{id:28,label:'Gift Sets'}];

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
