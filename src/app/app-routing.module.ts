import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RopaComponent} from './component/ropa/ropa.component'

const routes: Routes = [
  {
    path:'', redirectTo:'/ropa', pathMatch:'full' 
  },
  {
    path:'ropa', component:RopaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
