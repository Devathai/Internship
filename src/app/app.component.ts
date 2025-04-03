import { Component, computed, effect, signal, OnInit} from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ServiceService } from './service.service';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';
import { SignalComponent } from './signal/signal.component';
import { Observable } from 'rxjs';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApploginComponent } from './applogin/applogin.component';
import { TemplateformComponent } from './templateform/templateform.component';
import{ContentComponent} from './content/content.component'
import { InterfaceComponent } from './interface/interface.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ExampleComponent } from './example/example.component';
import { NewsApiComponent } from './news-api/news-api.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,CommonModule,FormsComponent,ReactiveFormsModule,ApploginComponent,TemplateformComponent,ContentComponent,InterfaceComponent,InterfacesComponent,ProductListComponent,ExampleComponent,NewsApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent //implements OnInit 
{
  // datas!:Observable<any>
  // city:string='sweden';

  // constructor(private output: ServiceService) {}
  

  //   ngOnInit() {
  //     this.datas=this.output.getWeather(this.city);

  // }
  
  
}

