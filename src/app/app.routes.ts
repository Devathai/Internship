import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { SignalComponent } from './signal/signal.component';
import { ServiceService } from './service.service';

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

{ path: '',   redirectTo: 'child', pathMatch: 'full' },
//{ path: '**', component: PageNotFoundComponent },
];

