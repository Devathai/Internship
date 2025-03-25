### Day21.
#### I learned about Reactive forms today. How the data flows in the reactive form. Reactive form in angular allows for a direct connection between the form element in the view and the data model through the instance of the form control. A form control instance refers to an object that represents a single input field in a form. It helps track the value, validation status, and changes of that input field. When we create new control(), we create a instance of the form control. This help in immediate data will be shared between the view and the model. The flow of these data will be in two directions. 
1. View to model – user action in view updates the data model.
2. Model to view – programmatic changes in the data model reflects in the view.
#### Data flow in view to model: For example,  when the user types in the input, angular captures that event and updates to the form control and it updates the data model.
1.	User type the value [‘hello’], input element emits the input with the value ‘hello’.
2.  Input value will be listened by the control value accessor, it will detect  the input value or event and immediately updates the form control instance.
3.  The form control instance emits the new value through the value changer observable.
4.  Then it will update the view to data model and emits the new value.
#### Data flow in model to view: We update the value programmatically (code) , It will update the view.
1.	If we need to change the value programmatically through the code using the .setValue(). It calls the form control instance.
2.	The form control instance emits the updated value through the value changes observable.
3.	Control value accessor captures the emitted value and updates the view with the new value in the input element. 
### Value changes Observable:
#### The value changes observable refers to an observable that emits the new values over time, When ever the value changes, we subscribe to that components to get the updated data. It listens to the changes in the form control and returns an observable that emits the new value, when ever the form control changes. this.nameControl.valueChanges.subscribe(value => {  }) it emits the new values that been given in input field.
### Form Control:
#### The value changes observable refers to an observable that emits the new values over time, When ever the value changes, we subscribe to that components to get the updated data. It listens to the changes in the form control and returns an observable that emits the new value, when ever the form control changes. this.nameControl.valueChanges.subscribe(value => {  }) 
### Grouping from controls: Forms contains more related controls. So reactive forms two ways to group the multiple controls into a single form. It can be done by Form group and form array. 
1. Form group –  it is used to create a single input form from multiple related forms. It can be used when form is created for a fixed set of controls so that can be managed together. Each control in a form group instance is tracked by name when creating the form group.
2. Form array – it is used in dynamic forms, where we can add or remove controls at run time. For example it can be used when the user has more than one value for the specific input element.
#### To use the form group and form control we must import the FormGroup and FromControl classes from the @angular/forms. Then create the form group and provide constructor to initialize the form control. Add the form controls inside the form group. Use form control name in the template to call the controls. All these form controls must be inside the form template.
### Creating nested form groups: 
#### We use nested form groups to organize complex forms with multiple related fields. A nested form group is nothing but a form group inside another form group. To access the value of child form we need to use the name of the group name and the element we need to access. confirmPassword= control.get('confirmPassword')?.value; to get the value of confirm password. 
### Form Builder: 
#### Instead of creating forms manually for more time using new FormGroup() and FormControl(), Form builder makes it easier to define controls and groups. Creating manually will be repetitive when we have multiple forms so, we use form builders. First we need to import FormBuilder class from the @angular/forms. Then to us that we need to inject the form builder in the component like this, private formBuilder = inject(FormBuilder); By using this.formBuilder.group we can create a form group and can have controls like this name:[‘ ‘]. 
### SetValue() and patchValue() :
#### SetValue() – It is used to set a new value for a controls. If we use set value in the forms group, we should replace the entire values of the control. We should be very careful while doing this. patchValue() – it is used to update the peoperties that need to be changed and it will render in the view.
### validators: 
#### It is like rules that check if a form input is valid or not. Angular provides built-in validators such as validators.required, validators.minlength(), validators.maxlength(), validators.email.  We declare this validators inside the form Contols. If use validators.required,  when the user leaves the input field without typing value it shows an error.  *ngIf="userForm.get('email')?.invalid && userForm.get('email')?.touched" This condition is used to show an error message when the email field is invalid and the user has touched.
#### Reactive Forms provide a structured and scalable way to handle form inputs, validation, and data binding in Angular applications. They allow for real-time synchronization between the model and the view, ensuring better control over form states. With features like FormBuilder, Validators, and Control Value Accessor, Reactive Forms make handling complex forms efficient and maintainable.
#### Thank you.
