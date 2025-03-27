import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { SignalComponent } from './signal/signal.component';
import { ServiceService } from './service.service';
import { FormsComponent } from './forms/forms.component';
import { ApploginComponent } from './applogin/applogin.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { contentChild } from '@angular/core';
import { ContentComponent } from './content/content.component';

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

{ path: '',   redirectTo: 'forms', pathMatch: 'full' },
//{ path: '**', component: PageNotFoundComponent },
];

