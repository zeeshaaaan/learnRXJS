import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './observable/custom/custom.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MapComponent } from './observable/map/map.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path:'promise', component:PromiseComponent},
  {path:'observable', component:ObservableComponent, children:[
    {path:'', component:ListComponent},
    {path:'fromEvent', component:FromEventComponent},
    {path:'interval', component:IntervalComponent},
    {path:'Of-From', component:OfFromComponent},
    {path:'to-array', component:ToArrayComponent},
    {path:'custom', component:CustomComponent},
    {path:'map', component:MapComponent},
  ]},
  {path:'**' , component:ObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
