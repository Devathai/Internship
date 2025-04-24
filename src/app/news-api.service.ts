import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=API_KEY';
  apiKey='90249e0d10b9415495dab71514031c16';
  constructor(private http: HttpClient) { }
  getNews():Observable<any[]>{
    const header= new HttpHeaders({'Content-Type': 'application/json' });
    const data= this.http.get<any[]>(`${this.apiUrl}&apiKey=${this.apiKey}`)
    console.log(data)
    return data;
  }
}
