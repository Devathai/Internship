import { Component,inject } from '@angular/core';
//import{login, User, student, payment} from'./interface';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-interface',
  imports: [CommonModule,ReactiveFormsModule
  ],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.css'
})
export class InterfaceComponent {
//   user: User ={
//     name: 'Devathai',
//     age: 25,
//     email: 'dev1325@gmail.com',
//     id: 45
//   }
//   formbuilder=inject(FormBuilder);
//    Login= this.formbuilder.group({
//     username: new FormControl <string> (''),
//     age:new FormControl <number| null>(null ),
//      email:new FormControl<string>(''),
// })
// students:student[]=[
//   {studentId:1001,studentName:'Dev',department:'CSE'},
//   {studentId:1002 ,studentName:'shobhana',department:'FoodTech'},
// ]
// payment=Object.values(payment);
// paymentForm=this.formbuilder.group({
//   payments:[payment.creditCard,Validators.required]
  
// })
// submit(): void {
//   const formData: login = this.Login.value as login; 
//   console.log('Submitted Data:', formData);
// }
// submitForm(){
//   if (this.paymentForm.valid){
//     console.log("selected method:",this.paymentForm.value.payments);
// } else{
//   console.log("invalid form");
// }
// }
}

