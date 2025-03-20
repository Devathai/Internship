import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { info } from 'console';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  myApi= 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }
  getData() :Observable <any[]>{
   const data =   this.http.get<any[]>(this.myApi).pipe(map((info:any)=>
    { return info.slice(0,10).map((fetch:any)=>({
    id:fetch.id,
    title:fetch.title,
    body:fetch.body,
    userId: fetch.userId

   }));
   }));
   console.log(data);
   return data
  }
  create(Data: { title: string; body: string; userId: number }): Observable<any[]> {
    return this.http.post<any[]>(this.myApi, Data);
  }
}
  
  
