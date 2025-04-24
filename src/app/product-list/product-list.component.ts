import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { map, mergeMap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ProductList} from './productList';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-list',
  imports: [RouterModule,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // value!:Observable<ProductList[]>;
  //   constructor(private productService : ProductListService){}
  //   ngOnInit(){
  //     this.fetchData();
  //   }
  //   fetchData(){
  //     this.value = this.productService.getData();
  //     this.value.subscribe(data => console.log('Fetched Data:', data));
  //   }
  }

    