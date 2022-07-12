import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RopaComponent } from './component/ropa/ropa.component';
import { LoginComponent } from './component/login/login.component';
import { ProductosComponent } from './component/productos/productos.component';
import { MenuComponent } from './component/menu/menu.component';
import { InsertClienteComponent } from './component/insert-cliente/insert-cliente.component';
<<<<<<< HEAD
import { SignupComponent } from './component/signup/signup.component';
=======
import { CarritoComponent } from './component/carrito/carrito.component';
>>>>>>> 3edd6a0cf2b5cd3a5b036aabd47303ad776d7f10

const routes: Routes = [
  {
    path:'' , redirectTo:'/login', pathMatch:'full'
  },
  {
    path:'signup' , component:SignupComponent
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
