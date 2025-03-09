### Day 9.
#### Today is the day 9 which starts with an small difference that is instead of going morning class we went to our mentor. He asked me to learn about the destructuring in Javascript. Destructuring can be done by two ways. 
#### i)   Object Destructuring 
#### ii)  Array Destructuring
#### Object destructuring is extracting values from objects and assign them to a variables. In this the destructing can be done in basic destructuring, setting default values, renaming the value, by nested object destructing. 
```js const emp={name1:'dev', age:'22',phno:'1234'}
       const{name1}=emp
       console.log(name1)

       const table={name2:{ tname:'table1',tid:'2' },
    tdata:'1234'}
    const{name2:{tname}}=table
   // console.log(name2)
   console.log(tname)
```
#### Array Destructuring is extracting the values from arrays and assigning them to a varaiable. It can be done by Skipping the values, using rest or spread operators.
```js const name=['Dev','22','12244'];
        const[,age]= name
       // console.log(names)
        console.log(age)
        //const[names,...phno]=name // Spread property it takes the value before it and return as an array
        //console.log(phno)
```
#### Object and array can be combined together, from that destructuring can be done.
```js const date=[{today:'thursday',time:'11.30'},
    {tmrw:'friday',time:'11.40'}
   ]
   const[{today},{time}]=date
  // const [,{time}]=date
   console.log(today)
   console.log(time)
```
#### I learned that using destructing we can able to fetch the necessary objects from the API JSON objects. Then I learned about recursion, where a function calls itself to solve a problem. Each recursive call breaks the problem into smaller subproblems until a base case is reached. The base case is like the termination point. Once the call back function the recahes the base case it stops the call backs.
#### Then after lunch we went to downstairs to the class . The session started with the topic Programming language .firstly we thought he is gonna teach about Java, Python or about other programming language and the remaining class will goes like technical. He started to speak about Machine language which uses 0's and 1's recognize by Electrical impulses. Then I get to know about Assembly Language which I studied in School days but now thinking about it hits different. Assembly language uses(SUB,MUL,ADD,DIV) after that High level language came. Then he switched the topic from Programming language to English language .I got confused what's the relation in both, the humans communication and machine's communication.
#### He said that there is set of rules in every languages like Symbols, Words, Sentences..etc. And showed some reading games like words without space, spelling mistake and words without meaning. Finally I get to know every language have set of rules and should have a meaning behind it for communication, which is related to Programming Language. In Programming language we call the set of rules as Syntax and the meaning behind it as Semantics ,now this makes sense by connecting both that every programming language have Syntax and Semantics.
#### At last the Conclusion he tried to say is Languages are for humans that we can understand, computers don't understand English or other language . So we using programming language as the key for communication that the compiler translates it to byte code and then to Machine code that how computers are understanding humans. Then I get to know about a K-13 Encryption which was Ceaser the king used ,then gave us a task to crate our own language like that by creating own Symbols and Sentences as a team. we have to finish that on Monday which feels Interesting.
#### Then went back to mentor and i learnt about DOM. DOM is used to make HTML document more interactive and dynamic, the script needs to be able to access to the contents of documents and it also needs to know when the user is interacting with it. The communciation with browser using the properties, methods, events in the interface called DOM. It is a tree-like representation of web pages that gets loaded into the browser dynamically change the contents of the page. It is mainly done ny document object, is the part of DOM that represents the entire HTML page. 
#### TO access the elements we use different methods and operators. 
1. document.getElementById() - The getElementById() method is used to select an HTML element by its ID. It always returns one element because IDs are unique.
2. document.getElementsByClassName() - The getElementsByClassName() method selects HTML elements by their class name. Items[0] selects the first element and changes its text.
3. document.getElementsByTagName() - the getElementsByTagName() method selects HTML elements by their tag name like h1, div, etc.
4. document.querySelector() - The querySelector() method is used to select the first matching element from the document using a CSS selector.
5. document.querySelectorAll() - The querySelectorAll() method is used to select all matching elements based on a CSS selector. It returns a list like array, so you need to loop through the elements to apply changes.
6. ```js
   <!-- getElementById-->
    <h1 id="title">Hi!!</h1>
    <button onclick="change()">Click here</button>

    <!-- getelement by classname-->
     <p class="class">may i know your name please</p>
     <button onclick="convert()">Click me</button>

     <!-- getelement by tagname-->
      <h2>Hi</h2>
      <h2>Hi</h2>
      <h2>Hi</h2>
      <button onclick="changeme()">change here</button>

    <!-- getelementby queryselector and queryselectorall-->
    <p id="p1" class="c1">para1</p>
    <p id="p1" class="c1">para2</p>
    <p id="p1" class="c1">para3</p>
    <p id="p1" class="c1">para4</p>
    <button onclick="queryselector()">queryselector</button>
    <button onclick="queryselsctorall()">queryselsctorall</button>

    <script>
    function change() {
      let a = document.getElementById("title").innerText = "How are you?";
    }
    function convert() {
        let b=document.getElementsByClassName("class");
        b[0].innerText="My name is dev";
    }
    function changeme(){
        let c=document.getElementsByTagName("h2");
        c[1].innerText="hello";
        c[2].innerText="how are you?";
    }
    function queryselector(){
    document.querySelector("#p1").style.backgroundColor='red';     // it will select only the first element of the class p1
    }
    function queryselsctorall(){
    let text=document.querySelectorAll(".c1")
    for(var i=0;i<=text.length;i++){
      text[i].style.backgroundColor='blue';
    }
    }
   ```
#### I have learned less things today than Yesterday, but which was very important than those and Advanced using practical things. Now I'm very curious to move ahead to learn about many new concepts and its applications.
#### Thank you.



