import { CommonModule } from '@angular/common';
import { Component, Input, Signal, signal,OnInit} from '@angular/core';
import { SignalComponent } from '../signal/signal.component';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SampleService } from '../sample.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [RouterModule,SignalComponent,CommonModule,FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {

value!:Observable<any[]>;
post!:Observable<any[]>;

constructor(private output: SampleService){}
ngOnInit(){
  const newData= {
    title: 'Hello there',
    body: 'we are creating new with post',
    userId: 1
  };

  this.post=this.output.create(newData);

  this.value=this.output.getData();
  
}

}






  