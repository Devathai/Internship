import { Component, computed, effect, signal, OnInit} from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ServiceService } from './service.service';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';
import { SignalComponent } from './signal/signal.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,CommonModule],
  // providers:[ActivatedRoute],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  datas!:Observable<any>
  city:string='sweden';

  constructor(private output: ServiceService) {}
  

    ngOnInit() {
      this.datas=this.output.getWeather(this.city);

  }
  
}
