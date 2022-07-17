import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RopaService } from 'src/app/service/ropa.service';
import { InsertComponent } from '../insertProducto/insert.component';
import { Ropa } from '../../model/model.ropa'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

//import {ModalController} from '@angular/'
@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.scss']
})
export class RopaComponent implements OnInit {
  //ropas: Ropa[] = [];
  ropa:any;
  title='CRUD ROPA'
  displayedColumns: string[] = ['ID', 'Tipo', 'Marca', 'Nombre', 'Talla', 'Costo', 'Stock', 'Fecha', 'Acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private dialog: MatDialog,
    private ropaService: RopaService,
    private changeDetectorRefs: ChangeDetectorRef,
    //private modalCtrl: ModalController
    ) { }

  ngOnInit(): void {
    this.getRopa();
  }

  openDialogo() {
     this.dialog.open(InsertComponent, {
      width: '60%'
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        this.getRopa();
      }
    })
  }

  async getRopa() {
    this.ropaService.getRopa().subscribe({
      next: (res) => {
        this.dataSource= new MatTableDataSource(res)   
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert("Erro al leer los datos")
      }
    })
  }

  editRopa(row:any){
    console.log(row);
    row.idropa
  
    this.dialog.open(InsertComponent,{
      width:'60%',
    
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getRopa();
      
      }
    })
  }

  deleteRopa(id:any){
    console.log(id)
    id.idropa
    this.ropaService.deletRopa(id).subscribe({
      next:(res)=>{
        alert("Prenda eliminada correctamente")
        this.getRopa();
      },
      error:()=>{
        alert("Error al eliminar prenda")
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 /* async presentModalOrigen() {
		await this.loading.show();
		const modal = await this.modalCtrl.create({
			component: LoginUsuarioPassPage,
			cssClass: 'change-address-shipping-modal',
			backdropDismiss: true,
			swipeToClose: true,
			animated: true,
			componentProps: {
				Titulo: 'Login',
			}
		});
		await this.loading.hide();
		modal.onDidDismiss().then((modalDataResponse) => {

			console.log(modalDataResponse);
			if (modalDataResponse !== null) {
				const modalData = modalDataResponse.data;
				console.log('Modal Sent Data1 : ' + modalData);
				this.usuario = modalData.usuario;
				this.clave = modalData.clave;
				if (!modalData.cerrar) {
					this.login();
				}
			}
		});*/

		/*await modal.present();

	}*/

}
