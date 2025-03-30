### Day 25.
#### Today I learned about the difference between the interface and how its used for different scenarios. Both interface and types are used to define the structure of an object, but have some difference. Primitives types are the basic built-in data types such as number, string, Boolean, null and undefined. Creating a alias, instead of writing string every time we can create a type.
```js
Type Address = string. 
Type homeAddress: Address = “ …..”
Type officeAddress: Adress = “….. “ 
```
#### Instead of creating string for every time, we can use address to define the variable. We can also combine multiple types using Union (|). Type Address = null | undefined; The value of the variable can be null or undefined. It cannot rake the value as string. It will show error, because it can only be null or undefined. Interface are only for object, not for primitive types.
#### A function type describes what a function looks like its parameters and return type. There are two ways to define a function type. Using type and interface. Here, both the function add that takes two numbers as input and returns a number. 
```js
Type add= (num1:number, num2:number) => number;
Const addition : add =(a,b) => a+b; 
console.log(add(5, 3));

Interface Add{
(num1: number, num2: number) : number);
}
```
#### A union type allows a value to be one of several types. This means the variable, parameter or return value can hold different types of value. Instead of explicitly defining the type for each property, we can use a mapped type with the arrow syntax. We can have conditional type and union type. Interface does not have the equivalent of condition and union type. 
#### Declaration merging:
#### Interface can be defined multiple times and typescript will merge them together automatically. This is called declaration merging. For example, we have declared an interface named as client and have property as name inside it. Here we can add more properties with the same interface name. 
```js
interface Client { 
    name: string; 
}
Now we add more properties using separate interface declarations.
interface Client {
    email: string;
}
interface Client {
    address: string;
}
```
#### But the typescript will merge all these definitions into one final interface as shown below. 
```js
interface Client {
    name: string;
    age: number;
    email: string;
    address: string;
}
```
#### If we are using interface from another library, we can add new property using declaration merging. We can’t merging using the type in typescript it will throw an error. type Client = { name: string; }; type Client = { age: number; }; if we declare like this It will throw an error because type must be uniquely defined and it cannot be redefined. We can also merge declaration in interface using extends and intersection. Both interface and type can be extended to create a new type with additional properties. 
#### Extending Interface and type :
#### An interface an inherit properties from another interface using extends keyword and add new ones. It can extend one or multiple interfaces. 
```js
interface VIPClient extends Client { 
    benefits: string[];
}
```
#### VIPClient inherits the name property from client. Its also adds a new property benefits. Extending an type. It cannot use extend, but it can inherit using an Intersection (&). type VIPClient = Client & { benefits: string[] }; it inherits the name property from client and adds the benefits property. Interface can inherit from a type as long as the type is known. This also works like extending an interface. Interface VIPclient extends client { benefits: string[]}. But we cannot extend an interface from an union type, it will not work because the type is not fixed  A union type ( A|B ) means either A or B, but an interface must have a fixed structure to extend, Since a union type represent multiple possible structure rather than a single, so interface cannot extend it.  It will throw an error if you use like this in code. 
#### Handling Conflicts:
#### In typescript , type and interface handle conflicts differently when they have the same property name. Interfaces detect conflits at compile time and show an error. Where as type automatically merge conflicting properties, which can leads to unexpected results.  Foe example, when we mwrge a function signature using type, it combines them into a single function that can handle different input types. 
```js
type Person = {
  getPermission: (id: string) => string;
};
type Staff = Person & {
   getPermission: (id: string[]) => string[];
};
const AdminStaff: Staff = {
  getPermission: (id: string | string[]) => {
    return typeof id === "string" ? "admin" : ["admin"];
  },
};
```
#### Function overloading allows a function to handle multiple argument types and return different results based on the input. When using type, we can define a type (Person) with a function (getPermission) that accepts a string and returns a string. Then, we create another type (Staff) that extends Person but changes getPermission to accept an array of strings (string[]) and return an array of strings (string[]). Since Staff must support both versions, we implement the function to check if the input is a string or an array. This works because type allow function signatures to be overridden, but interfaces do not support this kind of function overloading directly.
#### In TypeScript, when two types with the same property name but different data types are combined using an intersection (&), it creates a property conflict. This happens because TypeScript expects each property to have a single, well-defined type. type Person = { name: string; }; type Staff = Person & { name: number; }; If one type defines a property as a string and another defines the same property as a number, TypeScript cannot determine which type to run, leading to an error. Since an object cannot have a property that is both a string and a number at the same time, it prevents this conflict by throwing a type error.
#### Today, I learned about the key differences between interfaces and types in TypeScript, including declaration merging, union types, intersections, and function overloading. I also understood how property conflicts happen in intersections. To make this clearer, Anna gave me a task, which helped me understand better. It was a productive day and I’m eager to do a task about this on Monday.
#### Thank you.





