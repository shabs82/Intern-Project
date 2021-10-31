import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from "../model/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

 readAllProducts(): Observable<Product[]>{
  return this.http.get<Product[]>('https://localhost:44375/api/product');
 }

  getProductById(id: string): Observable<Product>{
    return this.http.get<Product>('https://localhost:44375/api/product/id');
  }

  async getProductsBySecondaryClassId(secondaryClassId: number): Promise<any[]> {
    const uspromise = await this.http.get<any>('https://localhost:44375/api/secondarycategory/' + secondaryClassId).toPromise();
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
