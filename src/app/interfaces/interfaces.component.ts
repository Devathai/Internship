import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { map, mergeMap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InterfacesService } from '../interfaces.service';
import{Product} from './interfaces'


@Component({
  selector: 'app-interfaces',
  imports: [RouterModule,CommonModule],
  templateUrl: './interfaces.component.html',
  styleUrl: './interfaces.component.css'
})
export class InterfacesComponent //implements OnInit
 { //product:Product[]=[];
//   ratings:any[]=[];
//   filteredProduct: Product[]=[];
//   categories:String[]=[]
//   value!:Observable<Product[]>;
//   constructor(private Interface:InterfacesService){}
//   ngOnInit(){
//     this.fetchData();
//   }
//   fetchData(){
//     this.value = this.Interface.getData();
//     this.value.subscribe((data) => {
//       console.log('Fetched Data:', data);
//         this.product = data as Product[]; 
//         this.filteredProduct=data;
//         this.calcAll(); 
//         this.getProduct();
//     })
//   }
//   getProduct(){
//        for(let product of this.product){
//         if(!this.categories.includes(product.category)){
//           this.categories.push(product.category);
//         }
//     } 
//   }
//   filtered(category:String){
//     if(category){
//       this.filteredProduct=this.product.filter((
//         product=>product.category===category
//       ))
//     }else{
//       this.filteredProduct=this.product;
//     }
       
//   }
//   calcAll(){
//     this.ratings=this.product.map((product)=>{
//      return this.starCalc(product.rating.rate)

//     })
//   } 
// starCalc(rates:number){
//   const star=Math.floor(rates);
//   const halfStar=rates-star >=0.5?1:0;
//   const emptyStar=5-star-halfStar;
//   return {
//     fullstars:new Array(star).fill('full'),
//     halfstar: new Array (halfStar).fill('half'),
//     emptystar:new Array(emptyStar).fill('empty')
//   }
// }
}
