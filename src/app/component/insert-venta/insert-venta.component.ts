import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VentasService } from 'src/app/service/ventas.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VentasComponent } from '../ventas/ventas.component';
import { DomSanitizer } from '@angular/platform-browser';
import { NgToastService } from 'ng-angular-popup';


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-insert-venta',
  templateUrl: './insert-venta.component.html',
  styleUrls: ['./insert-venta.component.css']
})
export class InsertVentaComponent implements OnInit {

  pre!: string;
  ventaForm !: FormGroup;
  actionBtn: string = "Guardar"


  constructor(private formBuilder: FormBuilder,
    private ventasService: VentasService,
    private toast: NgToastService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<InsertVentaComponent>,
    public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.ventaForm = this.formBuilder.group({
      idventa: ['', Validators.required],
      idropa: ['', Validators.required],
      idusuario: ['', Validators.required],
      cantidad: ['', Validators.required],
      subtotal: ['', Validators.required],
      total: ['', Validators.required],
      fecha: ['', Validators.required]
    });
    if (this.editData) {
      this.actionBtn = "Actualizar"
      this.ventaForm.controls['idventa'].setValue(this.editData.idventa);
      this.ventaForm.controls['idropa'].setValue(this.editData.idropa);
      this.ventaForm.controls['idusuario'].setValue(this.editData.idusuario);
      this.ventaForm.controls['cantidad'].setValue(this.editData.cantidad);
      this.ventaForm.controls['subtotal'].setValue(this.editData.subtotal);
      this.ventaForm.controls['total'].setValue(this.editData.total);
      this.ventaForm.controls['fecha'].setValue(this.editData.fecha);
    }
  }

  guardarVenta() {
    if (!this.editData) {
      if (this.ventaForm.valid) {
        console.log(this.ventaForm);
        this.ventasService.postVenta({
      
          idventa: this.ventaForm.value.idventa,
          idropa: this.ventaForm.value.idropa,
          idusuario: this.ventaForm.value.idusuario,
          cantidad: this.ventaForm.value.cantidad,
          subtotal: this.ventaForm.value.subtotal,
          total: this.ventaForm.value.total, 
          fecha: this.ventaForm.value.fecha
      })
      
          .subscribe({
            next: (_res) => {
              this.toast.success({ detail: "Correcto", summary: "Venta realizada correctamente" })
              this.ventaForm.reset();
              this.dialogRef.close('save');
              window.location.reload()
            },
            error: () => {
              this.toast.warning({ detail: "Incorrecto", summary: "Error al agregar la venta" })

            }
          });
      }
    } else {
      this.updateVenta()
    }

  }

  updateVenta() {
    this.ventasService.putVenta(this.editData.idventa, this.ventaForm.value)
      .subscribe({
        next: (_res) => {
          this.toast.success({ detail: "Correcto", summary: "Venta actualizada correctamente" })
          this.ventaForm.reset();
          window.location.reload();
          this.dialogRef.close('update');
        },
        error: () => {
          this.toast.warning({ detail: "Incorrecto", summary: "Error al actulizar la venta" })

        }
      });
  }

}
