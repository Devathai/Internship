import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import{ AbstractControl, FormControl, FormGroup,FormArray, ReactiveFormsModule, ValidationErrors, Validator, Validators} from '@angular/forms';


// interface user{
//   username:FormControl<string>,
//   age:FormControl<string>,
//   email:FormControl<string>
// }

@Component({
  selector: 'app-applogin',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './applogin.component.html',
  styleUrl: './applogin.component.css'
})
export class ApploginComponent {

//   formbuilder=inject(FormBuilder);
//      userLogin=this.formbuilder.group({
//      username: new FormControl(),
//      email:new FormControl(),
//      age:new FormControl()
//  })
//  onSubmit(){
//   console.log(this.userLogin.value);
//   console.log(this.userLogin.controls.email.value)
//  }

//  constructor(){
//   const number=[1,2,3,4,5];
//   this.rotatearray(number,3);
//   console.log(number);
//  }
 
//  rotatearray(arr:any[],position:any){
//   for (let i=0;i<position;i++){
//   let a=arr.pop();
//   arr.unshift(a);
//  }
//  }
// fb = inject(FormBuilder)
// // emailControl= new FormControl<string|null>('dev1325@gmail.com',{nonNullable:true});
// emailControl= new FormControl<string | null>(null)
// reset(){
//   this.emailControl.reset('');
// }
// setEmail(){
//   this.emailControl.setValue('dev1@gmail.com');
// }
}
