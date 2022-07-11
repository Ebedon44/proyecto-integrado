import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RopaComponent } from './component/ropa/ropa.component';
import { LoginComponent } from './component/login/login.component';
import { ProductosComponent } from './component/productos/productos.component';
import { MenuComponent } from './component/menu/menu.component';
import { InsertClienteComponent } from './component/insert-cliente/insert-cliente.component';
import { CarritoComponent } from './component/carrito/carrito.component';

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
  },
  {
    path:'menu', component:MenuComponent
  },
  {
    path:'cliente', component:InsertClienteComponent
  },
  {
    path:'carrito', component:CarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
