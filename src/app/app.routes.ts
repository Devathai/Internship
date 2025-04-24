import { Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
];
=======
import { ChildComponent } from './child/child.component';
import { SignalComponent } from './signal/signal.component';
import { ServiceService } from './service.service';
import { FormsComponent } from './forms/forms.component';
import { ApploginComponent } from './applogin/applogin.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { contentChild } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { InterfaceComponent } from './interface/interface.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ExampleComponent } from './example/example.component';
import { NewsApiComponent } from './news-api/news-api.component';

export const routes: Routes = [{
    path: '',
    component: ChildComponent
},
{
    path: 'child',
    component: ChildComponent
},
{ 
    path: 'signal',
    component: SignalComponent

},
{
   path:'forms', 
   component: FormsComponent
},
{
   path:'applogin',
   component: ApploginComponent
},
{
   path:'templateform',
   component: TemplateformComponent
},
{
    path:'content',
    component:ContentComponent
},
{
    path:'interface',
    component:InterfaceComponent
},
{
    path:'interfaces',
    component:InterfacesComponent
},
{
    path:'productList',
    component:ProductListComponent
},
{
    path:'example',
    component:ExampleComponent
},
{
    path:'newsApi',
    component:NewsApiComponent
},
{ path: '',   redirectTo: 'forms', pathMatch: 'full' },
//{ path: '**', component: PageNotFoundComponent },
];

>>>>>>> 080ce7f8a27d155bb5461e4fc3ffe0a5c05afce5
