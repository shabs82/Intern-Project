import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }











  sendSecondaryClassId(secondaryClassId: number): Observable<any> {
    debugger;
    return this.http.post<any>('https://localhost:44375/api/product', {secondaryClassId})
  }
}
