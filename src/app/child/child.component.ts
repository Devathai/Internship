import { CommonModule } from '@angular/common';
import { Component, Input, Signal, signal,OnInit} from '@angular/core';
import { SignalComponent } from '../signal/signal.component';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-child',
  imports: [RouterModule,SignalComponent,CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
// time= signal(1*60*60+30*60+30);
// interval:any;
// constructor(){
//   this.start()
// }
// start(){
//  this.interval = setInterval(()=>{
//   if(this.time()>0){
//     this.time.set(this.time()-1);
//   }
//   else{
//     clearInterval(this.interval)
//   }
//  },1000);
// }
// timer(): String {
//   const timer= this.time();
//   const hours = Math.floor(timer / 3600);
//   const minutes = Math.floor((timer % 3600) / 60);
//   const seconds = timer % 60;
//   const format = (num: number) => (num < 10 ? '0' + num : num);
// return `${format(hours)}:${format(minutes)}:${format(seconds)}`
// }
// targetTime!:number;
// remainingTime = signal(0);
//   timeout:any;
  

//   ngOnInit(){
//     this.targetTime = Date.now() + 10 * 60 * 1000; 
//     this.remainingTime.set(this.calculateEndTime());
//     this.start(); 
//   }

//   start() {
//     if(!this.timeout){
//       this.update();
//     }
//   }
//     stop(){
//       clearTimeout(this.timeout);
//       this.timeout = null;
//     }
//     update(){
//     if (this.remainingTime() > 0) {
//       this.remainingTime.set(this.calculateEndTime()); 
//       this.timeout=setTimeout(() => this.update(), 1000); 
//     }
//     else{
//       this.stop();
//     }
//   }

//   calculateEndTime(): number {
//     return Math.max(0, Math.floor((this.timediff() / 1000))); 
//   }
//   timediff(): number{
//    return this.targetTime - Date.now();
//   }
//   formatTime(): string {
//     let seconds = this.remainingTime();
//     let minutes = Math.floor(seconds / 60);
//     let sec = seconds % 60;
//     return `${minutes}:${sec < 10 ? '0' : ''}${sec}`;
//   }

//  post:any[]=[];

// //constructor(private id:SampleService){

// }
// ngOnInit(): void {
    
// }

value!:Observable<any>;

constructor(private output: SampleService){}
ngOnInit(){
  this.value=this.output.getData()
}
}






  