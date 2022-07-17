import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RopaService } from 'src/app/service/ropa.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RopaComponent } from '../ropa/ropa.component';



@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  ropaForm !: FormGroup;
  actionBtn: string = "Guardar"

  constructor(private formBuilder: FormBuilder,
    private ropaService: RopaService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<InsertComponent>) { }

  ngOnInit(): void {
    this.ropaForm = this.formBuilder.group({
      tipo: ['', Validators.required],
      marca: ['', Validators.required],
      nombre: ['', Validators.required],
      talla: ['', Validators.required],
      costo: ['', Validators.required],
      stock: ['', Validators.required],
      fecha: ['', Validators.required],

    });
    if (this.editData) {
      this.actionBtn = "Actualizar"
      this.ropaForm.controls['tipo'].setValue(this.editData.tipo);
      this.ropaForm.controls['marca'].setValue(this.editData.marca);
      this.ropaForm.controls['nombre'].setValue(this.editData.nombre);
      this.ropaForm.controls['talla'].setValue(this.editData.talla);
      this.ropaForm.controls['costo'].setValue(this.editData.costo);
      this.ropaForm.controls['stock'].setValue(this.editData.stock);
      this.ropaForm.controls['fecha'].setValue(this.editData.fecha);
    }
  }

  guardarRopa() {
    if (!this.editData) {
      if (this.ropaForm.valid) {
        this.ropaService.postRopa(this.ropaForm.value)
          .subscribe({
            next: (res) => {
              alert("Producto agregado correctamente")
              this.ropaForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert("Error al guardar informacion")
            }
          });
      }
    } else {
      this.updateRopa()
    }

  }

  updateRopa() {
    this.ropaService.putRopa(this.editData.idropa,this.ropaForm.value)
      .subscribe({
        next: (res) => {
          alert("Producto actualizado correctamente");
          this.ropaForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Error mientras se actualiza la prenda")
        }
      });
  }

}
