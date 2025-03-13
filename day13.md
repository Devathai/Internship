#### Day13
#### Today I have recalled about signals that i learnt the day before. Signals used to allow the user to notify when the value changes.Writable signal is a type of signal that allows you to modify their values directly. Computed siganls are values derived from other signals. Computed signals are read only. We can't set the values for computed signals directly. Effects is an operation that runs whenever one or more signal value changes. Effects always runs atleast one time. 
```js
 count=signal(20);
  msg=signal('');
  color=signal(["red","green","blue"])
  h1=signal(20);
  b1=signal(30);
  area=computed(()=>this.h1()*this.b1());
  constructor(){
    effect(()=>
    console.log("effects"+ this.count()));
    effect(()=>console.log("hi"+this.color))
  }
  decrease(){
    
    if(this.count()>0){
    this.count.update(value=>value-1);
    }
    else{
    this.msg.set("it reached")
    }
  }

}
```
#### I have an issue in routing the component. Then I asked help to Ashini akka. She helped me to route the components. I learned that I should import the child component in the parent component and navigate the path in app.route.ts.
#### Then I learnt about routing. Routing is nothing but a navigation between pages. It enables developers to build a single style page application with multiple views and allows to navigate between views. views represent a part of user interface that angular renders and update dynamically. Router are built-in service that helps to navigate between various components without reloading it. Routes are defined as an array of objects as it contains the objects as path and the component to load. Router Link acts as a placeholder that Angular dynamically fills based on the current router state.
```js
export const routes: Routes = [{
    path: 'child',
    component: ChildComponent
},
{ 
    path: 'signal',
    component: SignalComponent

},
{ path: '',   redirectTo: 'child', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }
];
```
#### path : child and signal navigates the path to child components, redirectTo: 'child', it redirects to the child page , path:'**' tell that the page is not found that is needed[404]. If we use anchor tag to navigate the components, it will reload the entire page everytime its clicked. To overcome this we use routerLink it navigate with every components without reloading it. 
#### After the lunch break, we went downstairs for the class. Today’s class was taken by Rexila, who is a frontend developer at Surfboard Payments. She started the class by explaining the fundamentals of HTML and CSS. I already learned these things before and even worked on some projects, so I wondered why I needed to learn them again. But when she gave us a task to complete using basic tags, I got confused because I was not in touch with these concepts for a while. Then, she explained everything clearly, focusing on the areas where we got stuck. I also learned about the sizing properties that used to confuse me, like padding and margin. She explained them more clearly with simple examples, which helped me understand the difference between them.
#### Then I came and worked on flex and grid concept That will be confucing me everytime. Flex is a single dimension layout system, it can arranged in either horizontal or vertical. Whereas Gird is a two dimensional layout system, it can be done both horizontal and veticall.

