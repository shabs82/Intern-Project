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
  return this.http.get<Product[]>('https://localhost:44375/api/Product');
 }

  getProductById(id: string): Observable<Product>{
    return this.http.get<Product>('https://localhost:44375/api/Product/id');
  }
}
