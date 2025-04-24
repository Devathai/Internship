import { Component } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { Observable } from 'rxjs';
import { Article } from './news-api';

@Component({
  selector: 'app-news-api',
  imports: [],
  templateUrl: './news-api.component.html',
  styleUrl: './news-api.component.css'
})
export class NewsApiComponent {
  value!:Observable<Article[]>
  constructor(private news:NewsApiService){
 }
 ngOnInit(): void {}
 getNews(){
  this.value=this.news.getNews();
  this.value.subscribe((data)=>{
    console.log(data);
  })
 }
}
