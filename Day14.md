#### Day14. 
#### I have been given a task to create a countdown timer. Fist I converted the time into seconds and using setInterval() I decreased the time by 1 seconds. Then i have been working to convert those seconds to minutes and seconds. 
```js
time= signal(1*60*60+30*60+30);
interval:any;
constructor(){
  this.start()
}
start(){
 this.interval = setInterval(()=>{
  if(this.time()>0){
    this.time.set(this.time()-1);
  }
  else{
    clearInterval(this.interval)
  }
 },1000);
}
timer(): String {
  const timer= this.time();
  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;
  const format = (num: number) => (num < 10 ? '0' + num : num);
return `${format(hours)}:${format(minutes)}:${format(seconds)}`
}
```
#### Signal is used to pass the data for the timer variable and interval variable is used to set the interval for 1000ms which is one second. Using If else loop once the time reaches the 0 seconds it goes into the else loop and using clearInterval it stop the function.  const hours = Math.floor(timer / 3600); is used to convert the seconds to hours and remaining seconds is converted to minutes and so on. const format = (num: number) => (num < 10 ? '0' + num : num); used this ternary operator to add 0 if the hours or minutes value is in sigle digit (9.15 - 09.15).
#### While I complie this task I took so long to compile and I didn't get the output too. I asked anna about it. He explained me that While using setInterval() all these will be in the task queue and so it is crashed. He told we will discuss this in detail later. Then asked me to find anthor way to do it without setTimeout and setInterval and also to get the cuurent time, from that set the ccountdown for timer. Then I referred Date() in Javascript.
```js
var date=new Date();
    var day=date.getDate();
    var month=date.getMonth()+1;
    var year=date.getFullYear();
    document.write("date is:"+day+"/"+month+"/"+year);
```
#### we have function called Date(), if we console this function we will get the output as [Fri Mar 14 2025 12:34:56 GMT+0530 (India Standard Time)] from this to get the date alone or month or year, we use get.Month()+1 because the index value start from zero. similaryly for month. We can also get Hours, minutes, seconds from it.
```js
var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
```
#### By using getHours() we get the hours, getMinutes() to get the minutes and getSeconds() to get minutes. We have another function to fetch the time is getTIme() and Date.now(). Both return the current time value. But the difference is getTime will get the time from the date object Date.now() will directly get the time. 
#### After this I have searched for the alternative for setTimeOut and setInterval, I got the alernatives as Interval(), pipe(), requestAnimationFrame() and delay() , Timer() operators from RXJS I have learned about any of these. Then anna asked to use the setTimeOut() itself. Even using setTimeOut() I'm facing the same issue.
```js
targetTime: number = Date.now() + 10 * 60 * 1000; // 30 minutes from now
  remainingTime= signal(this.calculateEndTime());
  

  constructor() {
    this.start(); 
  }

  start() {
    if (this.remainingTime() > 0) {
      this.remainingTime.set(this.calculateEndTime()); 
      setTimeout(() => this.start(), 1000); 
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
#### Then I went to 2nd floor for regular class, Koushik anna started to tell about programming language and compared with English language like difference between Tokens and the syntax and then datas. It is of two type const varries. Keywords are like const ,var, let, which also contains data type and then about variable name which will have the data type , then continues with expression and value.Then he told about Data types which has two types, Primitive, complex data types. Primitive-Int, char, short, byte..etc each have its own size and varies by Programming language. Non-primitive-Array, Map...etc which have continuous data's. By splitting everything into small packets and teaching was much understandable and increasing interest in this topics. I'm excited to learn more in such programming concepts that helps me to improve my knowledge much more in developing too. 
#### I learned about Eventloops, it enables the asynchronous programming by handling tasks efficiently. JavaScript is single threaded language. So we use eventloop to manage the execution many tasks.


