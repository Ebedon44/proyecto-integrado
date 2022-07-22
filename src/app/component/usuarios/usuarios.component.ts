import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { Usuarios } from '../../model/usuarios'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:any;
  title='CRUD USUARIOS'
  displayedColumns: string[] = ['idusuario', 'idrol', 'nombre', 'contrasena', 'email', 'telefono', 'direccion','Acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog,
    private usuarioService: UsuariosService,
    private changeDetectorRefs: ChangeDetectorRef,) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  async getUsuarios() {
    this.usuarioService.getUsuarios().subscribe({
      next: (res) => {
        this.dataSource= new MatTableDataSource(res)   
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert("Error al leer los datos")
      }
    })
  }

  editUsuarios(row:any){
    console.log(row);
    row.idropa
 
  }

  deleteUsuarios(id:any){
    console.log(id)
    id.idropa
    this.usuarioService.deleteUsuarios(id).subscribe({
      next:(res)=>{
        alert("Usuario eliminada correctamente")
        this.getUsuarios();
      },
      error:()=>{
        alert("Error al eliminar usuario")
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
}
