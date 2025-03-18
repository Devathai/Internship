#### Day 16.
#### I have given a task to solve three problem on LeetCode. The first problem is Two sum. In this we have a create a number of array and have to set the target. If the target is 9 then adding any two numbers in the array, the answer should be 9. we should not repeat the numbers for example the target is 6 we have only one 3 in the array we should not use the 3 twice. 
```js
function twoSum(num: number[], target: number): number[] {
 for (let i=0;i<=num.length-1;i++) {
    for(let j=i+1; j<num.length;j++){
        if(num[i]+num[j]===target){
            return[i,j];
        }

    }
 }
  console.log(twoSum([2,7,11,15],9));
};
```
#### I have created a function called twoSum with parameters num and target as datatype number and with a return value. I used two loop to check the values of i aand j. If the sum of num[i] and num[j] is equal to the target value it return the array[i,j].
#### Next problem is Valid Palindrome. A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. If the given string is palindrome return true, if not a palindrome return false. the result is in true or false.
```js
function isPalindrome(s: string): boolean {
    const reverse=s.replace(/[^a-zA-Z]/g, '');
    let a=reverse.toLowerCase();
    return a===a.split('').reverse().join(''); // it takes the string and split it with split()  and reversed it using reverse() and joined it using join()
};
console.log(isPalindrome("A man, a plan, a canal: Panama09"));
```
#### I have learned a new concept alphanumeric values. It is to remove all the punctations number from a string. Here, I have created a function isPlaindrome with parameter s with datatype string and have a return value as boolean. .replace(/[^a-zA-Z]/g, '') is used to replace all the puncuation, numbers with the empty value and stored it in a variable reverse. Then used .toLowerCase to convert all the uppercase values to lower case. Then used .split().reverse().join. it first split the string and reverse the string and join it. Then we compare the replaced string to the reversed string If it is equal then it returns true if not equal it return false value.
#### Then the next problem is First Unique Character in a String. Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
```js
function firstUniqChar(s: string): number {
    const count:Record<string, number>={}// it is a utility type that defines an object as key value pairs
    for(const char of s){     // char of s tells every charcter in a string.
        if(count[char]!==undefined)
        {
            count[char]+=1;
        }
        else{
            count[char]=1
        }
    }
    for(let i=0;i<s.length;i++){
        if (count[s[i]]==1){
        return i;
    }
    }

    return -1;
}
console.log(firstUniqChar("leetcode"));

```
#### In this problem, (char of s) takes the every character in string. Here, if the character is already defined it will increment the count. If not will assign as 1. Then we will loop every char and check the number of count that each character hasand compare it using assignment operator with 1, we can able to find the first unqiue character which has value 1 and we will return the i that is the index value of that array. If no unique character is found then will return -1.
### Services
#### Then I have given a task to create  a weather widget where you have to show current temperature using servies. I learned about services. Service are used to cover the logics, data fetching and other shared functionalites across different components. It can be injected into components and other sevices using dependency injection. Service is used to share data across multiple components and other servies. It can be used across our application once we use service method. It is responsible for providing the data to components which is asking for it to use. 
#### providedIn: 'root': it tells that the sevice is provided in the root and it can be accessed throughout the application. How to create service? ng generate service <service-name> we should use this command to create the sevice. We need to import service from the angular. We inject the service in the constructor because of dependency Injection also it creates the instance for that class. 
### Dependency Injection
#### Then I learned about Dependency Injection. It is a design pattern and a freature of angular that facilitates the management and sharing of compnents and servies across different part of applicaton. Here, we create only one instance and using it through out the application. We do not use the new operator to create the instance of class. Injector is the key part of the part of Dependency Injection system, it is responsible for crearing and managing instance of the class. Angular itself is the dependency injector, It automatically provides instances of services when needed.
```js

  constructor(private output: ServiceService) {}
  ngOnInit() {
      this.datas=this.output.getWeather(this.city);
}
```
#### Here, Serviceservice is the dependency that is injected.(private output: ServiceService) inside the constructor allows the component to use the service without manually creating the instance.
#### Then We had a session taken by Koushick anna. He told ua about class. What is blueprint? For example we take the house blueprint. We have a structure of the house where is the hall, kitchen etc.. Similarly, For programming language Class is the blueprint which as properties and functionalities. Anna explained it clearly with an example. I have tried it with car. 
```js
class Car {
  Details(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
show() {
    console.log(this.brand);
  }
}

const car1 = new Car();
car1.Details("Ford", "Mustang", 2023); 

const car2 = new Car();
car2.Details("Tesla", "Model 3", 2022);

car1.show();
car2.show();
```
#### Here I have created a class called car. inside this I have a method called Details with parameters brand, model and year, then intialized all the properties. then I created a function show() to display the output. const car1 = new Car() creating instance of the car class by using new keyword. Given values for the method using object and methods. Called the show() to display the function.
#### Class is divided into two has something and do something. All the properties comes under the has something and functions comes under the do something.
