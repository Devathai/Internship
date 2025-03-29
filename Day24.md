### Day 24.
#### Today I recalled about the template driven forms. I leaned about the Validations in template driven forms. In template – driven forms, validations are applied using directives in the template (in HTML). We have some built- in validators in angular. 
1. Required – Field must not be empty.
2. Email – must be a valid email formal
3. Min length – must be at least given characters.
4. Max length – Must not exceed more than the given characters.
#### Validation rules in Template – driven and reactive forms are the same because both use angular’s validation. In template – driven the validation is given inside the template and uses ngModel to access the values. In reactive forms, validations are defined in the TypeScript using Validators and uses Form group and form control. We use template – driven forms for simple forms, where we have few fields and basic validations. We use reactive forms for multiple input field, nested form groups, dynamic fields, conditional validations. 
#### Ng-content:
#### Ng – content is like a place holder where we can insert custom content into a component. It is used for content projection, which allows us to pass content from a parent component into a child component directly. By default, content replaces <ng-content>, but we can use slots with select=[attribute] to control where different parts of content appears. 
```js 
<div class="header">
        <ng-content select="[header]"></ng-content>
    </div>
```
#### Here the [header] is the naming slot. We use this with select attribute to project it. 
```js 
<app-content>
  <p body>Myself Devathai</p>
<app-content> 
```
#### We pass the content from the parent component the child component. By using the slot name inside the contents element tag understand it is the content for that class. It helps to organize content into specific section as body or header, etc. Slots in <ng-content> use the select attribute to place content in the right spot. Elements with matching attributes fill those slots.
#### Angular can show fallback content for a components placeholder if that component does not have any matching child content. We can use fall back content inside the <ng-content> element. If no content is passed into the component, the fallback content will be displayed instead. We use fall back content when the content might not be provided by the parent component. Instead of showing empty section, fallback content ensures a default content in the view. 
#### Then I learned about interfaces, types and enums. They are used to define a structure of the data. But they all work differently. 
#### Interfaces:
#### An interface is a way to define a structure for an object. It tells what types of properties and data types an object should have. It helps to catch errors during the development process, like wrong type for the property.  Without interface, TypeScript won’t check if an object has the right properties. This can lead to run time errors. Object must follow a specific format. It will warn if something is wrong. It helps in type safety. 
```js
export interface User {
name: string;
  age: number;
    email: string;
   id: number;
 }
```
#### The interface is created in a separate file. We should import and use interface in our component. The interface defines the structure for the object. This.http.get<product> it ensures that the API response follows the product service. The product variable stores the API data in the form of an observable. It helps in checking the types. 
#### Types:
#### Type is a Typescript feature used to define custom type. It is used to create the structure of the object, and provide unions, intersections, functions and primitive values. It is also similar as interface but provides other features. It can be implemented by class. It is used for typed checking during development. 
```js
export type student= {
     studentId:number,
     studentName:string,
     department:string
 }
students:student[]=[
{studentId:1001,studentName:'Dev',department:'CSE'},
  {studentId:1002 ,studentName:'shobhana',department:'FoodTech'},
]
```
#### The type is created in a separate file.  Imported this file in the component where we are using it. It represent the object with three properties. Students is declared as an array of student objects (student[]). The array contains the student objects following the structure defined by the student type. 
#### Enums:
#### An enum (enumeration) is a way to organize a collection of related values. It is a user – defined datatype. It is used to assign names and give reference to basic constants. They group related values like user roles, payment method, order status etc. It can be numeric or string based and helps to prevent invalid values.
```js 
export enum payment{
creditCard='Credit card',
UPI='UPI',
netbanking='Net banking'
}
payment=Object.values(payment); 
paymentForm=this.formbuilder.group({ 
payments:[payment.creditCard,Validators.required] )}
``` 
#### I created a separate typescript file for creating enum and imported in the component. The above defines the enum named payment with three possible values. The object.values(payment) extract all the values from the payment enum into an array for displaying the values. I have created a form. And the form control has a single control as payments. The default value is payment.creditCard and validation.required make sure that a selection is made. I have created check box the select the value.
#### Today, I learned about interfaces, types, and enums in Angular, which helped me gain a deeper understanding of writing structured. Interfaces ensure that objects follow a fixed structure, making data handling more consistent. Types provide flexibility by allowing unions and intersections, making complex data models easier to manage. Enums help in organizing related values. I also learned about ng-content, which enhances component reusability through content projection. Understanding these concepts has been highly productive, and It was very interesting.
#### Thnak you.





