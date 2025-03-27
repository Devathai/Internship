### Day 23. 
#### I started the day by learning about typed and untyped forms. Typed forms were introduced to improve the type safety in reactive forms. It makes that the form controls, groups, arrays have the strict types means that the variable, Function or object holds value of the specified data type. It is used to reduce the run time errors.
```js
emailControl= new FormControl<string|null>('dev1325@gmail.com');
```
#### In this above example, The emailControl form control can store either string or null value only. The main use of this to ensure that the values only contains the expected data type which helps in run time errors. 
#### Untyped forms – before angular 14, the relative and template- driven forms were untyped. They default to any , which leads to many run time errors. Template – driven forms use NgModel, which does not support typing. 
```js
name: new FormControl('', Validators.required)
```
#### In this example, The name form contol does not have any strict types. So it is default to any data types. This may lead to run time errors. For example, I’m trying to add a string to a number it will lead to a error. So using typed one will prevent from errors.
### Nullable and Non – nullable control. 
#### Nullable control is a form field that can be empty (null), which means the field does not require any data. We use this control when the fields are optional. For example, we see middle name are optional in some forms. 
```js
emailControl= new FormControl<string | null>(null);
```
#### Here the email control starts as null. We can have either string or null in the input field. We can also set the value using setValue() as null. While using those we must check for null.
#### Non – nullable control is a form field that can never be empty (null). It must have a value always. We use this control when a field must have a value. For example, username must be necessary while using login forms.  
```js
emailControl= new FormControl<string|null>('dev1325@gmail.com',{nonNullable:true})
```
#### In above example, we have a form control as email control which gets the user input. <string|null> means the control can hold a string or null value. Here dev1325@gamil.com is initial value to the form control. It starts with a string value. nonNullable: true , tells that the control not to allow null values, even though null was provided. We can simply give control as <string> type that will work. We use nonNullable control to prevent the accidental null values.
#### Specifying an explicit type. If we want the initial control value to be null, you can specify the type explicitly as a string or null. It will help us when we want to restart with an empty value and add non-nullable value later. We set the email initially as null and it accepts the string later as given below.
```js
emailControl= new FormControl<string | null>(null);
this.emailControl.setValue('dev1@gmail.com');
```
#### Then while doing the yesterday’s task I have little difficult in Array index. So my anna gave me two task to understand it in deeper. I was given task on arrays, One is to re-arrange the elements and other one is to rotate the element with given position. I learned about push() and unshift() methods. Push() is used to remove the last element from the array. Unshift() function is used to add an element to first in an array. 
### Template - Driven Forms.
#### Template driven forms is used to create forms directly in the HTML template using directives like ngModel. In this type of form the typescript code will be less and template code will be more. It is used to simple forms where we won’t be using form logics. Form logic is like a rules, validations that controls how the form works. For example, password matching, showing error message if the input is invalid. Template driven forms uses two-way data binding, mean the changes in UI update the component and changes in component update the UI. If the user types something in an input field, The component variable gets updated. If the component variable changes, The input field updates automatically.
#### Ng-model: It is angular directive that enables two-way data binding between the input field and a component variable. When a user types in an input field, ngModel updates the variable in the component and similarly when the variable in the component changes, ngModel updates the input field automatically.
```js
<input type="text" [(ngModel)]="username" />
```
#### Two way binding happens because of ngModel. It happens as property binding and event binding. It binds the username value to the component to the input field. In the above example, If the username is “dev”, the input field will show “dev”. Event Binding updates the username variable when the user types in the input field. For example, If the user types username as “deva”, username updates to “deva”. 
#### In template driven forms, each input element needs a name attrivute. It is important because in angular the name property is used to register the control with the form and track its state. 
```js
 <div class="form-group">
            <label for="id">Id:</label>
            <input type="number" class="form-contol" id="id" [(ngModel)]="model.id" name="id" required>
        </div>
```
#### The name=”id” attribute is registers this input field as form control inside the form. Without name, angular cannot track this field, like form validation and value accessing will not work. The ngModel directive binds the input to the form model, allowing to manage the contols. The required attribute means that the field must be filled before submitting the form.  [(ngModel)]="model.id" ensures that the input value is synced with the model object. Any changes made by the user immediately update the model object in the component. The model object stores the latest user inputs. 
#### Typed forms improve type safety in Angular by ensuring form controls accept only specific data types, reducing runtime errors. Before Angular 14, forms were untyped, leading to potential issues. Template-driven forms use ngModel for two-way binding, making UI updates automatic. The name attribute registers form controls, enabling validation and tracking. I learned these concepts today, and it was a very productive day.
#### Thank You.





