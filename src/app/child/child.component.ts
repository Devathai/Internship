import { CommonModule } from '@angular/common';
import { Component, Input, Signal, signal,OnInit} from '@angular/core';
import { SignalComponent } from '../signal/signal.component';
import { RouterModule } from '@angular/router';
import { map, mergeMap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SampleService } from '../child.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [RouterModule,SignalComponent,CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent //implements OnInit 
{
// value!:Observable<any[]>;
// post!:Observable<any>; 
// newData:any;
// postData:any;

constructor(private output: SampleService){}
// ngOnInit(){
//   this.newData= {
//     title: 'Hello there',
//     body: 'we are creating new with post',
//     userId: 1
//   }; 
//   this.Update();
//   this.Delete(2);
 
// }
// fetchData(){
//   this.value=this.output.getData();
// }
// displayPost(){
//   this.post=this.output.create(this.newData).pipe(map(response=>{
//     console.log(response);
//    }))
//  this.post=this.output.create(this.newData);
// }
// Update(){
//  const postId=1;
//  const newData={
//   id:postId,
//   title:'hello there',
//   body:'we are updating post',
//   userId:1
//  };
//  this.output.updatePost(postId, newData).pipe(
//   map(response => {
//     console.log(response);
//     this.fetchData(); 
//     return response; 
//   })
// ).subscribe();
// }
// Delete(postId: number) {
//   this.output.deleteId(postId).pipe(map(response => {
//     console.log(response,"deleted"); 
//     return response;
//   })).subscribe(()=>{this.fetchData();});
// }
}








  