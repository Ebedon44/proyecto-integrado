import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RopaService } from 'src/app/service/ropa.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  ropaForm !: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private ropaService:RopaService,
    private dialog:MatDialogRef<InsertComponent>) { }

  ngOnInit(): void {
    this.ropaForm = this.formBuilder.group({
      tipo : ['',Validators.required],
      marca: ['',Validators.required],
      nombre: ['',Validators.required],
      talla: ['',Validators.required],
      costo: ['',Validators.required],
      cantidad: ['',Validators.required],
      fecha: ['',Validators.required],
    })
  }

  guardarRopa(){
   console.log(this.ropaForm.value)
   if(this.ropaForm.valid){
    this.ropaService.postRopa(this.ropaForm.value)
    .subscribe({
      next:(res)=>{
        alert("Producto agregado correctamente")
        this.ropaForm.reset;
        this.dialog.close('save');
      },
      error:()=>{
        alert("Error al guardar informacion")
      }
    })
   }
  }

}
