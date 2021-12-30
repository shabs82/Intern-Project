import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from "../model/product";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

 readAllProducts(): Observable<Product[]>{
  return this.http.get<Product[]>(environment.apiURL + '/api/product');
 }

  getProductById(id: string): Observable<Product>{
    return this.http.get<Product>(environment.apiURL + '/api/product/'+ id);
  }

  async getProductsBySecondaryClassId(secondaryClassId: number): Promise<any[]> {
    const uspromise = await this.http.get<any>(environment.apiURL + '/api/secondarycategory/' + secondaryClassId).toPromise();
    return uspromise.map((a: { id: any; name: any; productCode: any; price: any; availability: any; description: any; }) => {
      console.log(a);
      const id = a.id;
      const name = a.name;
      const productCode = a.productCode;
      const price = a.price;
      const availability = a.availability;
      const description = a.description;
      return {id: id, name: name, productCode: productCode, price: price, availability: availability, description: description} as Product ;
    });
  }
}
