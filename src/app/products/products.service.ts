import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Products} from "./products";
import {catchError, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  // getProducts(): Observable<Products[]>
  // {
  //   return this.http.get<Products[]>('https://dummyjson.com/products').pipe(
  //     tap(data => console.log("All", JSON.stringify(data))),
  //   );
  // }
  //
  // private handleError(err: HttpErrorResponse)
  // {
  //   console.log(err);
  // }
}
