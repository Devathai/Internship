import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from './interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InterfacesService {
  myApi="https://fakestoreapi.com/products";

  constructor(private http:HttpClient) { }

  // getData():Observable<Product[]>{
  //   const header= new HttpHeaders({'Content-Type': 'application/json' });
  //   const data= this.http.get<Product[]>(this.myApi);
  //   console.log(data)
  //   return data;
  // }
}
