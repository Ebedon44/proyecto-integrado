import { Component, OnInit } from '@angular/core';
import { Ropa, Venta } from 'src/app/model/model.ropa';
import { CarritoService } from 'src/app/service/carrito.service';
import { RopaService } from 'src/app/service/ropa.service';

@Component({
  selector: 'app-ropa-list',
  templateUrl: './ropa-list.component.html',
  styleUrls: ['./ropa-list.component.css']
})
export class RopaListComponent implements OnInit {

  ropas : Ropa[] = [];

  constructor(
    private ropaService: RopaService, private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.ropaService.getRopa().subscribe(ropas => this.ropas = ropas);
  }

  CantidadUp(venta: Venta, ropa:Ropa): void{
    if(ropa.stock > venta.cantidad ){
      venta.cantidad ++;
      this.carritoService.addCarrito(venta);
    }
  }

  CantidadDown(venta: Venta, ropa:Ropa): void{
    if(venta.cantidad > 0 ){
      venta.cantidad --;
      this.carritoService.addCarrito(venta);
    }
  }

}
