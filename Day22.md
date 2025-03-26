### Day22.
#### Today I learned about Form array. A Form array is a list of form controls that you can add or remove dynamically. It will be useful when the user is giving multiple inputs for an input element. For example, if user need to add multiple mobile number, Form array help to create and manage those inputs fields. 
#### First step is to import the Form Array class from the @angular/forms. Create form builder service to create a Form array instance. Inject the form builder in the component class. Then set the property to define all the controls.  Then create a form control name inside the form which is used to accessed the value of those control forms.  Then create an array with a default value  as empty string.
```js
address: this.formBuilder.array([this.formBuilder.control('')]);
```
#### In this address is the form control name followed by the form builder instance where all the form controls are there, .array([‘ ‘]) – it creates a form array, list of form controls With an empty string as its default value. 
#### Then learned about how to access the form array controls. We use getter function to call the controls in the array for calling .get() for each form controls.  Instead of repeatedly using this.inputForm.get(‘’) every time, we need to access the Form array, so we use getter method. It helps to access form array directliy. For example, 
```js
this.profileForm.get('aliases') as FormArray;
```
#### It retrieves the aliases control from the From group and returns a reference to it. As From array tells the retrieved control is a Form array. It returns an abstract control which can be any form control type. We can use specific methods like .push() etc without using those we can’t use push(). The FormArray.push() method inserts the control as a new item in the array. 
#### To display that array in the template from input we need to use Form Array in HTML template. The Form array name =” “ connects the Form array to the template. ngFor* loops through each control inside the Form array. Each control in the form array doesn’t have a name, so we use the index to bind each field using from control name. 
```js
<div formArrayName="aliases">
                <button (click)="add()" type="button">add</button>
                <div *ngFor="let alias of aliases.controls; let index = index">
                    <div><label>{{ index }}</label></div>
                    <div><input type="text" id="alias-{{ index }}" [formControlName]="index"></div>
                </div>
                </div>
```
```js
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
```
### Abstract control:
#### Abstract control is the base class for all the form controls. It provides shared properties and methods for managing form validation, value changes and state tracking. Abstract control is like the main class or parent class for the Form control, Form group, form array. Since all form controls extend abstract control, they inherit its properties and methods. 
### Some properties of abstract control:
1. Value – gets the current value of the form control or  group or array.
2. Valid – returns true is the control has no validation errors. 
3. Invalid – returns true if the control has validation errors.
4. Errors – returns validation errors if there.
5. SetValue() – sets a new value (it must match all the input fields given)
6. patchValue() – updates a part of the form without requiring full structure. 
7. Reset() – resets the form control to its initial state.

####  Then learned about how to create a folder in GitHub. How we create a folder as like that need to added / followed by our folder name. It takes as folder. Then can upload or push a file to that folder. 
#### Today’s learning helped me understand the importance of FormArray and AbstractControl in Angular forms. Using FormArray makes handling dynamic fields much easier, and AbstractControl helps manage forms efficiently.
#### Thank you.

