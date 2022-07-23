import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { signupService } from 'src/app/service/signup.service';
import { signupI } from 'src/app/model/signup.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    idrol: new FormControl('2', Validators.required),
    nombre: new FormControl('', [
      Validators.required,
      Validators.nullValidator,
    ]),
    contrasena: new FormControl('', [
      Validators.required,
      Validators.nullValidator,
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.nullValidator,
    ]),
    direccion: new FormControl('', [
      Validators.required,
      Validators.nullValidator,
    ]),
  });
  constructor(private signupService: signupService, private router: Router) {}

  ngOnInit(): void {}

  register(form: signupI) {
    this.signupService.postSignup(form).subscribe((data) => {
      this.router.navigate(['login']);
    });
  }
}
