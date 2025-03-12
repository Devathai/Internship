### Day11.
#### Today I have laarnt about Signals in angular. Signals are reactive primitive that offers granular tracking of state changes. Signal allows the user to notify them when the value changes. Signals are of three types.
1. Writable signals
2. computed signal
3. Effect
#### Writable signal is a type of signal that allows you to modify their values directly. Computed siganls are values derived from other signals. Computed signals are read only. We can't set the values for computed signals directly. Effects is an operation that runs whenever one or more signal value changes. Effects always runs atleast one time. We should not update signals inside effects because it may cause infinite circular updates. Set(value) is used to replace the exiting value. Update() is used to modify the current value to new value without relacing it entirely. 
#### When trying this signls I faced an issue in output. I created a child component and signal component and I have written some code in signal component. When I try to run this I could see the output for signal component, only the child component works. Then I asked my mentor about it. He explained me about the issue. I didn't set the route to signal component from child component. The child component didn't render the signal component because it does not define path to it. He expalined me about it and set the router link from child to signal component. It is used to navigate the routes. Signals are used when there is a need to change or update a value, instead of changing value for everywhere, we use signals to change or updtae it entirely. It will refect all over the program.
#### Then I learnt about some Javascript methods. 
#### Includes() - return a true or false if the array contains a specific value.
```js
let arr=[1,2,3,4,5];
      console.log(arr.includes(2));
      let arr1=['hi','hello','dev'];
      console.log(arr1.includes('Hello')) // it also sees the uppercase and lowercase difference
```
#### sort() - Sorts the array in order. By default it is ascending order. We use callback function to call the next element and sorts it
```js
let a=[1,2,3,4,5,7,8,9]
      // a.sort(); // sort() is used to sort the elements in an array. we use arrow function is used to call back the next element in array and sorted using two variables. BY default it is ascending order
       a.sort((c,b)=>c - b);
       console.log(a)
```
#### at(Index) - returns the element at the given index inlcuding negative index.
```js
 let position=["dev","pavi","shobuma"]
       console.log(position.at(-3)) // negative index takes the values from last. -1 takes the last element from array, -2 takes the second last element
```
#### IndexOf() - return an index position of the given value
```js
let d=[10,20,30,40,50]
       console.log(d.indexOf(30)); // it gives the index value of an array.
```
#### some() - is a method that checks if any one element satifies the given condition. If yes it return true or else false. We use callback function to call every element.
```js
let e=[5,-6,8,9,-3,9,0]
       let Some= e.some(val=>val%2==0)
       console.log(Some);
       ///
       let ages=[{ name:"dev",age:22},{name:"Pavi",age:17}];
       let minor=ages.some(a=>a.age <18)
       console.log(minor)
```
#### Every() - is a method that checks every element in the given array should meet the given condition. If yes it return true or else false. We use callback function to call every element.
```js
let numbers=[2,4,6,9]
       let divisible=numbers.every(num=>num%2==0)
       console.log(divisible)
```
