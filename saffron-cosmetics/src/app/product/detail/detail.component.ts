
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../shared/services/product.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((paramData)  =>{
      this.productService.getProductById(paramData['id'])
        .subscribe((backendData) =>{
        if(backendData.availability == -1 ){
          //Change the frontend button to out of stock.
        }
        console.log(backendData);
      })
    })
  }

}
