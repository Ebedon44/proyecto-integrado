import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RopaService } from 'src/app/service/ropa.service';
import { InsertComponent } from '../insert/insert.component';
import { Ropa } from '../../model/model.ropa'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit {

  ropas: Ropa[] = [];
  displayedColumns: string[] = ['id', 'Tipo', 'Marca', 'Nombre', 'Talla', 'Costo', 'Stock', 'Fecha', 'Acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog,
    private ropaService: RopaService) { }

  ngOnInit(): void {
    this.getRopa();
  }

  openDialogo() {
    this.dialog.open(InsertComponent, {
      width: '50%'
    });
  }

  getRopa() {
    this.ropaService.getRopa().subscribe({
      next: (res) => {
        //console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert("Erro al leer los datos")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
