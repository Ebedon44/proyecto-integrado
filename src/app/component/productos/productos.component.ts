import { Component, OnInit } from '@angular/core';
import { RopaService } from 'src/app/service/ropa.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
 
  public listProductos:any = []

  constructor(private ropaService:RopaService) { 

  }

  ngOnInit(): void {
    this.getRopa();
  }


  public getRopa() {
    this.ropaService.getRopa()
    .subscribe(respuesta => {
      this.listProductos = respuesta;
    })
      
  }

}
