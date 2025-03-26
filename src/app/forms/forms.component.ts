import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import{ AbstractControl, FormControl, FormGroup,FormArray, ReactiveFormsModule, ValidationErrors, Validator, Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { group } from 'node:console';

@Component({
  selector: 'app-forms',
  imports: [CommonModule,ReactiveFormsModule, FormsModule],
  standalone:true,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  // favoriteColorControl = new FormControl(''); 
  // favoriteColor:any='';
  // private formBuilder = inject(FormBuilder);

  // profileForm= this.formBuilder.group({
  //   firstName: [''],
  //   lastName: [''],
  //   address: this.formBuilder.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //   }),
  // })
  
  // changecolor(){
  //   this.favoriteColorControl.setValue('blue'); // use setValue to update the value in code or programatically.
  // }
  // updatecolor(){
  //   this.favoriteColor='red'; // use setValue to update the value in code or program
  // }
  // onSubmit(event:Event){
  //   event.preventDefault();
  //   console.log(this.profileForm.value);
  // }
  // updateProfile(){
  //   console.log(this.profileForm.value)
  //   this.profileForm.patchValue({
  //     firstName: 'John',
  //     address:{
  //       street: 'vinagayar street'
  //     }
  //   })
  // }
  
 
  private formbuilder= inject(FormBuilder);
// inputForm= this.formBuilder.group({
//   fullName:['',[Validators.required]],
//   email:['',[Validators.required, Validators.email]],
//   passwords:this.formBuilder.group({
//     password:['',[Validators.required, Validators.minLength(6)]],
//  confirmPassword:['',Validators.required]
//   },{ validator: this.passwordMatching}), // validator checks with the passwordMatching function to check for the validation
// gender:[''],
// termsandCondition:[false,Validators.requiredTrue]});
// genderOptions=['Male','Female','others'];

// passwordMatching(control:AbstractControl):ValidationErrors| null{
//   const password= control.get('password')?.value;
//   const confirmPassword= control.get('confirmPassword')?.value;
//   return password=== confirmPassword? null:{Mismatch:true} // used ternary operator to check the value of password and confirm password matches are not if matched return null, if not return mismatch:true;
// }
// onSubmit() {
//   if (this.inputForm.valid) {
//     console.log('Form Submitted:', this.inputForm.value);
//   } else {
//     console.log('Form is invalid');
//   }
// }
 inputForm=this.formbuilder.group({
  name:['',Validators.required],
  phno:['',Validators.maxLength(10)],
  address:this.formbuilder.group({
    building:[''],
    street:[''],
    city:[''],
    zipcode:['',]
  }),
  aliases:this.formbuilder.array([]),
});

get aliases(): FormArray{
  return this.inputForm.get('aliases') as FormArray;
}
add(){
  this.aliases.push(this.formbuilder.control(''))
}
getValues(){
  return this.inputForm.value;
}
}


