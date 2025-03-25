import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { SignalComponent } from './signal/signal.component';
import { ServiceService } from './service.service';
import { FormsComponent } from './forms/forms.component';

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

{ path: '',   redirectTo: 'forms', pathMatch: 'full' },
//{ path: '**', component: PageNotFoundComponent },
];

