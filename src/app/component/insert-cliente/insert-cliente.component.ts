import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { signupService } from 'src/app/service/signup.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-insert-cliente',
  templateUrl: './insert-cliente.component.html',
  styleUrls: ['./insert-cliente.component.css'],
})
export class InsertClienteComponent implements OnInit {
  signupForm!: FormGroup;
  actionBtn: string = 'Guardar';

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: signupService,
    private toast:NgToastService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<InsertClienteComponent>
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      ID: ['', Validators.required],
      Usuario: ['', Validators.required],
    });
    if (this.editData) {
      this.actionBtn = 'Actualizar';
      this.signupForm.controls['ID'].setValue(this.editData.ID);
      this.signupForm.controls['Usuario'].setValue(this.editData.usuario);
    }
  }

  guardarSignup() {
    if (!this.editData) {
      if (this.signupForm.valid) {
        this.signUpService.postSignup(this.signupForm.value).subscribe({
          next: (res) => {
            alert('Usuario agregado correctamente');
            this.signupForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('Error al guardar informacion');
          },
        });
      }
    } else {
      this.updateSignup();
    }
  }

  updateSignup() {
    this.signUpService
      .putSignup(this.editData.idusuario, this.signupForm.value)
      .subscribe({
        next: (res) => {
          alert('Usuario actualizado correctamente');
          this.signupForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert('Error mientras se actualiza la prenda');
        },
      });
  }
}
