import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { loginI } from 'src/app/model/login.interface';
import { Router } from '@angular/router';
import { ResponseI } from 'src/app/model/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    usuario: new FormControl('', [
      Validators.required,
      Validators.nullValidator,
      Validators.email,
    ]),
    contrasena: new FormControl('', [
      Validators.required,
      Validators.nullValidator,
    ]),
  });
  constructor(private loginService: LoginService, private router: Router) {}

  errorStatus: boolean = false;
  errorMsg: any = '';

  ngOnInit(): void {}

  onLogin(form: loginI) {
    this.loginService.loginByEmail(form).subscribe((data) => {
      let dataResponse: ResponseI = data;
      if (!dataResponse.status) {
        this.router.navigate(['home']);
      } else {
        this.errorStatus = true;
        this.errorMsg = 'Usuario o contrasena incorrecto';
      }
    });
    return true;
  }
}
