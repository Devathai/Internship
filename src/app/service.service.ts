import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey='b47e497c388a463905e6346dfb4cd3a1';

  constructor(private http: HttpClient) {
  }
  getWeather(city: string): Observable<any> {
    const data =  this.http.get(`${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}`).pipe(map((data:any)=>({
      temperature: data.main.temp,
      condition: data.weather[0].description,
      humidity:data.main.humidity,
    }
  )))
  console.log(data);
    return data
  }
}
