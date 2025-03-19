import { CommonModule } from '@angular/common';
import { Component,input, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [CommonModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  // timer=signal(10);
  // interval:any;
  // constructor() {
  //   this.start();
  //  }
  //  start(){
  //   this.interval=setInterval(() =>
  //     {this.timer.update(time=>Math.max(time-1,0));
  //     if(this.timer()===0){
  //       this.stop();
  //     }
    
  //   },1000);
  // } 
  // stop(){
  //   clearInterval(this.interval)
  // }
}
