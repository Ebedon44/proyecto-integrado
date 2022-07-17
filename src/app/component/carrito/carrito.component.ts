import { Component, OnInit } from '@angular/core';
import { RopaService } from 'src/app/service/ropa.service';
import { InsertComponent } from '../insertProducto/insert.component';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { Ropa } from 'src/app/model/model.ropa';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  private carrito = [];
  private carritoNumeroItems = new BehaviorSubject(0);

  data: any = []
  searchKey: string = "";
  public searchTerm: string = '';
  products!: Ropa[];

  constructor(
    private dialog: MatDialog, 
    private ropaService: RopaService
    ){}

  obtenerCarrito(){
    return this.carrito;
  }

  obtenerCarritoNumeroItems(){
    return this.carritoNumeroItems;
  }

  addCart(product: Ropa){
    
  }


  ngOnInit(): void {
    this.getRopa();
    
    this.ropaService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
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

  editRopa(idropa:any){
    this.dialog.open(InsertComponent,{
      width:'60%',
      data:idropa
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        //window.location.reload()
        //this.getRopa();
        //this.refresh();
      }
    })
  }
  deleteRopa(id:any){
    console.log(id.idropa)
    this.ropaService.deletRopa(id.idropa).subscribe({
      next:(res)=>{
        alert("Prenda eliminada correctamente")
        this.getRopa();
       
      },
      error:()=>{
        alert("Error al eliminar prenda")
      }
    });
  }

  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    this.ropaService.search.next(this.searchTerm);
  }

}
