#### Day15.
#### Started the day with exploring the concept Eventloop in deeper. It is a single threaded infinite loop which is running task based on call stack availability and task queues. Event loop keeps on checking the queues and stacks. It consists of Micro queue, task queue, call stack and web API. It keeps on checking call stack whether it is empty or not. If it empty it checks the queue and pushes to the stack and executes.
```js
console.log('1');
        console.log('2');
        function three(){
            console.log('3');
        }
        function threeandfour(){
            three();
            console.log('4');
        }
        console.log('5')
        threeandfour();
        console.log('5')
output: 1 2 5 3 4 5
```
#### Call stack - It is a mechanism to keep track of the function currently and what functions are called. The execution is managed by Last In First Out order. When a function is called, it’s added to the top of the stack. When the function completes, it is popped off the stack. The process continues until the stack is empty.
#### Task Queue - When an asynchronous function is complied its callback is pushed into the task queue. A queue that is waiting to run once the call stack is empty. It is a type of Data Structures. 
```js
 setTimeout(()=>console.log('Step1'),4000);
        setTimeout(()=>console.log('Step2'),2000);
        console.log('end')
output: step2, step1.
```
#### In this program when the setTimeOut function is called it is pushed to the API and then is pushed to the task queue, then the eventloop checks the call stack is empty or not. If it is empty then the function is pushed to call stack abd executed. 
#### MicroTask- Promises and other microstack queue, which is processed before the task queue. It is waiting to run after the promise returned a value. Event loop ensures that call stack is empty and pushes all the micro task functions to call stack and then it executes the task queue. <b>Microtask queue has high priority than the task queue. .then, .catch, .final , await all the functions will be pushed to the microtask queue.
#### Web API - These imcludes setTimeOut(), setInterval(), DOM events and etc. Web API's provides the set of interactions that allows to interact with the browsers features. It has two types. Callback phase and Promise phase.
#### Then my mentor asked to do a task add the stop and start button on the countdown timer program.
```js
 targetTime!:number;
remainingTime = signal(0);
  timeout:any;
  

  ngOnInit(){
    this.targetTime = Date.now() + 10 * 60 * 1000; 
    this.remainingTime.set(this.calculateEndTime());
    this.start(); 
  }

  start() {
    if(!this.timeout){
      this.update();
    }
  }
    stop(){
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    update(){
    if (this.remainingTime() > 0) {
      this.remainingTime.set(this.calculateEndTime()); 
      this.timeout=setTimeout(() => this.update(), 1000); 
    }
    else{
      this.stop();
    }
  }

  calculateEndTime(): number {
    return Math.max(0, Math.floor((this.timediff() / 1000))); 
  }
  timediff(): number{
   return this.targetTime - Date.now();
  }
  formatTime(): string {
    let seconds = this.remainingTime();
    let minutes = Math.floor(seconds / 60);
    let sec = seconds % 60;
    return `${minutes}:${sec < 10 ? '0' : ''}${sec}`;
  }
}
```
#### Then Koushik anna took class about the functions. While declaring a variable we should be aware of the input data we are giving. 
```js
         a=10;
         a='10';
```
#### The first varaible a the value is in integer or number, but in second variable it is taken as string value. While doing any operation it wil throw an error. So we should be careful while declaring the values. The declaration is in the format as let/const variable name operator value sentence terminator.
#### Objects - it is a collection of key-value pairs. It allows storing related data and functionalities together. The key should be unique always. 
```js
const emp={name1:'dev', age:'22',phno:'1234'
           name2:'pavi', age2:'23', phno2:'5678'}
```
#### Functions - it is block of code that performs a specific task. function is of two types i) Declaring ii) Calling. Once we declare a function without calling it make the declaring function no use. It will work only if we call a function. 
```js
function add(a, b) {
  return a + b;
}

const sum = add(5, 3);
console.log(sum);
```
#### In this function sum it returns a value of a+b. We are calling the function outside the scope. We can call another function from inside the scope of some other function. If we didn't return a value it will be shown as undefined.
#### Typed language follows a strict rules on how variables are declared and used. variables must have specific datatype, for example: string, int, etc. If we come to untyped language there are no rules to declare a variable and how it is used. It works on any of the datatype. Typescript is an example of typed language and JavaScript is an example of untyped language.
#### Then anna asked what is the pupose oh having money. For example if we are having 10cr and 10 lakhs, but we cannot spend the 10cr but can spend the 10lakhs. obviously we will choose 10 lakhs. What is the intentionality does money gives us? I am really thinking it about, but couldn't able to figure.
#### I have learned may new things today. I have many more to learn and I'm eager to gain more knowledge that impore myself and my carrer.
