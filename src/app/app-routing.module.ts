import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RopaComponent } from './component/ropa/ropa.component';
import { LoginComponent } from './component/login/login.component';
import { ProductosComponent } from './component/productos/productos.component';

const routes: Routes = [
  {
    path:'' , redirectTo:'/login', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'ropa', component:RopaComponent
  },
  {
    path:'productos', component:ProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
