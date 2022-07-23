import { Component, OnInit } from '@angular/core';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoService } from 'src/app/service/carrito.service';
@Component({
  selector: 'app-finalizar-venta',
  templateUrl: './finalizar-venta.component.html',
  styleUrls: ['./finalizar-venta.component.css']
})
export class FinalizarVentaComponent implements OnInit {
  tablacarrito : any = [];
  constructor(
    private carritoService:CarritoService
    ) {  }

  ngOnInit(): void {
    this.getCarritoRopas()
  }

  getCarritoRopas(){
    this.tablacarrito = this.carritoService.getRopasCarrito()
  }

}
