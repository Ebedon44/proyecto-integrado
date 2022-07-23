import { Component, Input, OnInit } from '@angular/core';
import { RopaService } from 'src/app/service/ropa.service';
import { InsertComponent } from '../insertProducto/insert.component';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ropa, Venta } from 'src/app/model/model.ropa';
import { DomSanitizer } from '@angular/platform-browser';
import { CarritoService } from 'src/app/service/carrito.service';
import { VentasService } from 'src/app/service/ventas.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  
})
export class CarritoComponent implements OnInit {

  total: any;
  ventas : Venta[] = [];
  ropas : Ropa[] = [];

  datacarrito : any = [];
  tablacarrito : any = [];
  data: any = []
  searchKey: string = "";
  public searchTerm: string = '';
  products: any =[];
  constructor(
    private dialog: MatDialog,
    private ropaService: RopaService,
    public sanitizer: DomSanitizer,
    private carritoService: CarritoService,
    private ventasService: VentasService
  ) { }

  ngOnInit(): void {
    this.getRopa();
    this.getVenta();
    this.ropaService.search.subscribe((val: any) => {
      this.searchKey = val;
    })

    this.carritoService.ropas
    .subscribe((data: any )=> {this.ventas = data
      console.log("ventas ingresadas")
      console.log(this.ventas)
    });

  }

  getCarritoRopas(){
    this.tablacarrito = this.carritoService.getRopasCarrito()
  
  }

  getTotal() {
    let totalventas = 0
    for (let index = 0; index < this.tablacarrito.length; index++) {
 
     totalventas += parseFloat(this.tablacarrito[index].costo)
      
    }
    this.total = totalventas
  }
  openDialogo() {
    this.dialog.open(InsertComponent, {
      width: '60%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getRopa();
      }
    })
  }

  async getRopa() {
    this.ropaService.getRopa().subscribe({
      next: (res) => {
        console.log(res);
        res.forEach((element: any) => {
          const resAux = {
            costo: element.costo,
            fecha: element.fecha,
            idropa: element.idropa,
            imagen: element.imagen,
            marca: element.marca,
            nombre: element.nombre,
            stock: element.stock,
            talla: element.talla,
            tipo: element.tipo
          }
          this.data.push(resAux)
          
        });
      },
      error: (err) => {
        alert("Erro al leer los datos")
      }
    })
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.ropaService.search.next(this.searchTerm);
  }

  async getVenta() {
    this.ventasService.getVenta().subscribe({
      next: (res) => {
        console.log(res);
        res.forEach((element: any) => {
          const resAux = {
            idventa: element.idventa,
            ropa:element.ropa,
            usuario:element.usuario,
            fecha:element.fecha,
            cantidad:element.cantidad,
            subtotal:element.subtotal,
            total:element.total
          }
          this.datacarrito.push(resAux)
          
        });
      },
      error: (err) => {
        alert("Error al leer los datos")
      }
    })
  }


  addCarrito(ropa:any){
   this.carritoService.addCarrito(ropa)
   this.getCarritoRopas()
   this.getTotal()
  }

}