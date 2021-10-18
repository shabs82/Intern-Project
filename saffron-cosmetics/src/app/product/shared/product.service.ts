import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from "./model/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

 readAllProducts(): Observable<any>{
  return this.http.get('https://localhost:44375/api/Product');
 }
}
