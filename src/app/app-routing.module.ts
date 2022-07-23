import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RopaComponent } from './component/ropa/ropa.component';
import { LoginComponent } from './component/login/login.component';
import { ProductosComponent } from './component/productos/productos.component';
import { MenuComponent } from './component/menu/menu.component';
import { InsertClienteComponent } from './component/insert-cliente/insert-cliente.component';
import { SignupComponent } from './component/signup/signup.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { AboutComponent } from './component/about/about.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { VentasComponent } from './component/ventas/ventas.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch:'full',
        component: ProductosComponent,
      },
      {
        path: 'carrito',
        component: CarritoComponent,
      },
      {
        path: 'cliente',
        component: InsertClienteComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'ropa',
        component: RopaComponent,
      },
    ],
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
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'usuarios', component:UsuariosComponent
  },
  {
    path:'ventas', component:VentasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
