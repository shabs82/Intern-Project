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
  sendSecondaryClassId(secondaryClassId: any): Observable<any> {
    debugger;
    return this.http.post<any>('https://localhost:44375/api/product', {secondaryClassId})
  }
}
