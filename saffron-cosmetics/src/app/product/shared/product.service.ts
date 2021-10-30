import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from "./model/product";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


 readAllProducts(): Observable<any>{
  return this.http.get('https://localhost:44375/api/Product');











  sendSecondaryClassId(secondaryClassId: number): Observable<any> {
    debugger;
    return this.http.post<any>('https://localhost:44375/api/product', {secondaryClassId})
  }

}
