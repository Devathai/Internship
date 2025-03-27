import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { info} from './template';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-templateform',
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css'
})
export class TemplateformComponent {
//   skills=['drawing','singing','dancing','cooking'];
//   model= new info(18,'dev',22,this.skills[3]);
//   submitted=false;
//   onSubmit(){
//     this.submitted=true;

// }
}
