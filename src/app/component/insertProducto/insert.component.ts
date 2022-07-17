import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RopaService } from 'src/app/service/ropa.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RopaComponent } from '../ropa/ropa.component';
import { DomSanitizer } from '@angular/platform-browser';
import { NgToastService } from 'ng-angular-popup';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}



@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  imagenes: any = [];
  photoSelected!: string | ArrayBuffer;
  file!: File
  pre!: string;
  ropaForm !: FormGroup;
  actionBtn: string = "Guardar"
  idImagen!: string;
  nuevoId!: string


  constructor(private formBuilder: FormBuilder,
    private ropaService: RopaService,
    private toast: NgToastService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<InsertComponent>,
    public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.ropaForm = this.formBuilder.group({
      tipo: ['', Validators.required],
      marca: ['', Validators.required],
      nombre: ['', Validators.required],
      talla: ['', Validators.required],
      costo: ['', Validators.required],
      stock: ['', Validators.required],
      fecha: ['', Validators.required],
      //imagen: ['', Validators.required]



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
        console.log(this.ropaForm);
        this.ropaService.postRopa({
      
          tipo: this.ropaForm.value.tipo,
          marca: this.ropaForm.value.marca,
          nombre: this.ropaForm.value.nombre,
          talla: this.ropaForm.value.talla,
          costo: this.ropaForm.value.costo,
          stock: this.ropaForm.value.stock,
          imagen: "http://localhost:4000/"+this.nuevoId,
        
          fecha: this.ropaForm.value.fecha
      })
      
          .subscribe({
            next: (_res) => {
              this.toast.success({ detail: "Correcto", summary: "Prenda agregada correctamente" })
              this.ropaForm.reset();
              this.dialogRef.close('save');
              window.location.reload()
            },
            error: () => {
              this.toast.warning({ detail: "Incorrecto", summary: "Error al agregar la prenda" })

            }
          });
      }
    } else {
      this.updateRopa()
    }

  }

  updateRopa() {
    this.ropaService.putRopa(this.editData.idropa, this.ropaForm.value)
      .subscribe({
        next: (_res) => {
          this.toast.success({ detail: "Correcto", summary: "Prenda actualizada correctamente" })
          this.ropaForm.reset();
          window.location.reload();
          this.dialogRef.close('update');
        },
        error: () => {
          this.toast.warning({ detail: "Incorrecto", summary: "Error al actulizar la prenda" })

        }
      });
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = _error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
    return
  });

  clearImage(): any {
    this.pre = '';
    this.imagenes = [];
  }



  capturarImagen(event: any) {
    const archivoCapturado = event.target.files[0]
    console.log(archivoCapturado)
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.pre = imagen.base;
      console.log(imagen);

    })
    this.imagenes.push(archivoCapturado);

  }


  onPhotoSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      const archivoCapturado = event.target.files[0]
      console.log(archivoCapturado)
      this.extraerBase64(archivoCapturado).then((imagen: any) => {
        this.pre = imagen.base;
        console.log(imagen);

      })
      this.imagenes.push(archivoCapturado)
      reader.readAsDataURL(this.file);
    }
    this.ropaService
      .postImagen(this.file)
      .subscribe(
        (res:any )=> {
          console.log(res.photo.imagePath)
          this.idImagen = res.photo.imagePath
          this.nuevoId = `${this.idImagen.split('\\')[0]}/${this.idImagen.split('\\')[1]}`
          console.log('NUEVO ID',this.nuevoId);
        },
        err => console.log(err)

      );
  }

  uploadPhoto() {
    this.ropaService
      .postImagen(this.file)
      .subscribe(
        res => {
          console.log(res);
          alert("Imagen ingresada correctamente")
        },
        err => alert("Imagen ingresada correctamente")

      );
    return false;
  }

}
