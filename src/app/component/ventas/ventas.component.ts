import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VentasService } from 'src/app/service/ventas.service';
import { InsertVentaComponent} from '../insert-venta/insert-venta.component';
import { Venta } from '../../model/model.ropa'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  venta:any;
  title='CRUD VENTA'
  displayedColumns: string[] = ['idventa', 'idropa', 'idusuario', 'cantidad', 'subtotal', 'total', 'fecha', 'Acciones'];
  dataSourceVenta!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog: MatDialog,
    private ventasService: VentasService,
    private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getVenta();
  }

  openDialogo() {
    this.dialog.open(InsertVentaComponent, {
     width: '60%'
   }).afterClosed().subscribe(val=>{
     if(val ==='save'){
       this.getVenta();
     }
   })
 }

 async getVenta() {
   this.ventasService.getVenta().subscribe({
     next: (res) => {
       this.dataSourceVenta= new MatTableDataSource(res)   
        this.dataSourceVenta.paginator = this.paginator;
        this.dataSourceVenta.sort = this.sort;
     },
     error: (err) => {
       alert("Error al leer los datos")
     }
   })
 }

 editVenta(row:any){
   console.log(row);
   row.idropa
 
   this.dialog.open(InsertVentaComponent,{
     width:'60%',
   
   }).afterClosed().subscribe(val=>{
     if(val==='update'){
       this.getVenta();
     
     }
   })
 }

 deleteVenta(id:any){
   console.log(id)
   id.idventa
   this.ventasService.deleteVenta(id).subscribe({
     next:(res)=>{
       alert("Venta eliminada correctamente")
       this.getVenta();
     },
     error:()=>{
       alert("Error al eliminar venta")
     }
   });
 }

 applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSourceVenta.filter = filterValue.trim().toLowerCase();

   if (this.dataSourceVenta.paginator) {
     this.dataSourceVenta.paginator.firstPage();
   }
 }

}
