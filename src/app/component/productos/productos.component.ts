import { Component, OnInit } from '@angular/core';
import { RopaService } from 'src/app/service/ropa.service';
import { InsertComponent } from '../insertProducto/insert.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  data: any = []
  searchKey: string = "";
  public searchTerm: string = '';
  constructor(private dialog: MatDialog, private ropaService: RopaService) { }

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
        this.getRopa();
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
