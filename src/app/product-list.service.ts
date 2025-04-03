import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductList } from './product-list/productList';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {

//  myApi=" https://fakestoreapi.com/products/1"
//   constructor(private http:HttpClient) { }
//   getData():Observable<ProductList[]>{
//     const header= new HttpHeaders({'Content-Type': 'application/json' });
//     const data= this.http.get<ProductList[]>(this.myApi);
//     console.log(data)
//     return data;
//   }
}


