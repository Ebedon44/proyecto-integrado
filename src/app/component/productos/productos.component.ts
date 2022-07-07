import { Component, OnInit } from '@angular/core';
import { RopaService } from 'src/app/service/ropa.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
data:any= []
  constructor(private ropaService:RopaService) { }

  ngOnInit(): void {
    this.getRopa();
  }

  async getRopa() {
    this.ropaService.getRopa().subscribe({
      next: (res) => {
        console.log(res);
        res.forEach((element: any)=> {
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
        
        /*this.dataSource= new MatTableDataSource(res)   
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
         console.log(res)*/
      },
      error: (err) => {
        alert("Erro al leer los datos")
      }
    })
  }

}
