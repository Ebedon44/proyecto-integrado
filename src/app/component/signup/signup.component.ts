import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { signupService } from 'src/app/service/signup.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { InsertClienteComponent } from '../insert-cliente/insert-cliente.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signup: any;
  title = 'Usuarios';
  displayedColumns: string[] = ['ID', 'Usuario'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private signUpService: signupService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this;
  }

  openDialogo() {
    this.dialog
      .open(InsertClienteComponent, {
        width: '60%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') {
          this.getSignup();
        }
      });
  }

  async getSignup() {
    this.signUpService.getSignup().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('Erro al leer los datos');
      },
    });
  }

  editSignup(row: any) {
    console.log(row);
    row.idusuario;

    this.dialog
      .open(InsertClienteComponent, {
        width: '60%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
          this.getSignup();
        }
      });
  }

  deleteSignup(id: any) {
    console.log(id);
    id.idusuario;
    this.signUpService.deleteSignup(id).subscribe({
      next: (res) => {
        alert('Usuario eliminado correctamente');
        this.getSignup();
      },
      error: () => {
        alert('Error al eliminar usuario');
      },
    });
  }
}
