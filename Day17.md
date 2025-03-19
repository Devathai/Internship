### Day17.
#### To do the given task weather widget, I need to use HTTP client to make request the API and also need to learn about observables.  
### HTTP client:
#### HTTP client service is used to make HTTP requests to APIs. while requesting it use as http request to the API to request for fetching data and it replies with the http response. The response to the request with retuen as JSON object. To make the hhtp request url is very important to which we are sending the request. Http endpoints - It defines which type of request we want to send to the API. We have different types of Http endpoints for doing the request.
### Http Endpoints:
1. GET
2. PUT
3. DELETE
4. POST
5. PATCH
#### GET - It is an end point that is used to fetch the record from the requested API or server. We can fetch list of all records as well as the particular records by using ID. 
#### POST - It is used to create a new data in the server. We send the body of the data as JSON format. 
#### PUT - IT is used to completely update the existing record in the server. It also has the body which has the necessary details for the updation.
#### PATCH - It is used to update the only specific data in the existing record. 
#### DELETE - It is used to delete the records from the server. 
#### Request body and header - when we create a new record in the database we need to send the details foe that with the request. Headers are mostly set by the client to the data which we want to send with the request. GET do not have body as it only fetch the data from the server.
#### I need to import the Httpclient module for using it. I have imported the Httpclient module from angular, It shows like striked out which means its deprecated. It is been updated as import { provideHttpClient } from '@angular/common/http'; I faced some difficulties while congfiguring this. Then I referred the angular.dev site how to configure it. We need to configure it in app.config.ts file and set it in the providers. 
```js
this.http.get(`${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}`)
```
### Observables:
#### Observables is a wrapper around an asynchronous data. we use observables to handle asychronous data. JS is a single threaded programmimg lanugage. The code is execited line by line one after the other. While http request it will return stream od datas. While requesting an API it will take some time to response to the request. If we use observable, it runs in the background without blocking the main threads. We can send all the data to the client at a time or divide it into smaller chunks and send over a time. While sending all the data server takes a time to response. When we send the one after other as streaming data. We are streaming one big file into small chunks to the client. 
#### Observable is in RxJS library [Reactive Extensions for JavaScript] is a JavaScript library that allows us to work with asynchronous data and provides some methods and operators to use on observables to manipulate the data. Observable is the function that converts the ordinary data stream to observable one that run in a pattern. They are used  for handling events, API requests, user inputs, and real-time data.
#### observable pattern - We have Event Emitters[observables], Eveent Listener[observer], Subscriber, Event Handler. Obervables emit as follows .next(), .error(), .completion(). Observables emits the data. observer uses that data by subscribing to all those event then handle it by executing all the events. Subscriber always listen to the events. Once we done with the events we need to unsubcribe to avoid the leaking of datas. We can use the evnet only if we are subscribing to it. 
#### subsribing is deprectaed in the latest version. So I asked anna what's the other method we can use. He told we can use pipe in RxJS for it. Then I learned about pipes. Pipes allows us to handle asynchronous data. It is a method to apply opeartors on obervables. It hepls us to modify the data stream and tranforming the values emitted ob observables. Async pipe allow us to subscribe to an observable from the view template and returns the value emitted. It also handles unsubscribing when the component is destroyed. By using this we no need to manually subscribe and unsubscribe to an observable. We need to install RxJS library and import in the application. We need to import observale from RxJS and use map() call back function to allow the data stream one by one.
```js //service component.
export class ServiceService {
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey='b47e497c388a463905e6346dfb4cd3a1';

  constructor(private http: HttpClient) {
  }
  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}`).pipe(map((data:any)=>({
      temperature: data.main.temp,
      condition: data.weather[0].description,
      humidity:data.main.humidity,
    })))
  }
}
```
```js \\ app.cpmponent
export class AppComponent implements OnInit {
  datas!:Observable<any>
  city:string='sweden';

  constructor(private output: ServiceService) {}
  

    ngOnInit() {
      this.datas=this.output.getWeather(this.city);

  }
  fetchWeather(){
   
  }
}
\\ HTML :
<h2>Weather Report</h2>
<div *ngIf="datas | async as datas">
    <p>Temperature: {{ datas.temperature }}°C</p>
    <p>Condition: {{ datas.condition }}</p>
    <p>Humidity: {{datas.humidity }}%</p>
  </div>
  
```

