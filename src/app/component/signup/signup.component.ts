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
    nombre: new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
  });
  constructor(private signupService: signupService, private router: Router) {}

  ngOnInit(): void {}

  register(form: signupI) {
    this.signupService.postSignup(form).subscribe((data) => {
      this.router.navigate(['login']);
    });
  }
}
