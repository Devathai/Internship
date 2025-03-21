import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { info } from 'console';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  myApi= 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }
  getData() :Observable <any[]>{
    const header= new HttpHeaders({'Content-Type': 'application/json' });
   const data =   this.http.get<any[]>(this.myApi).pipe(map((info:any)=>
    { return info.slice(0,10    ).map((fetch:any)=>({
    id:fetch.id,
    title:fetch.title,
    body:fetch.body,
    userId: fetch.userId

   }));
   }));
   console.log(data);
   return data
  }

  create(Data:{ title: string; body: string; userId: number }): Observable<any> {
    const header= new HttpHeaders({'Content-Type': 'application/json' });
     return this.http.post<any>(this.myApi, Data,) 
  }
  updatePost(id:number, updatedData:any):Observable<any>{
    const header= new HttpHeaders({'Content-Type': 'application/json' });
    return this.http.put<any>(`${this.myApi}/${id}`,updatedData);
  }
  deleteId(id: number): Observable<any> {
    return this.http.delete<any>(`${this.myApi}/${id}`);
  }
  }


