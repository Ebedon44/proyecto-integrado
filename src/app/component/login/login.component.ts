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
    usuario: new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required),
  });

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onLogin(form: loginI) {
    this.loginService.loginByEmail(form).subscribe((data) => {
      // let dataResponse: ResponseI = data;
      //if (dataResponse.status == '201 Created') {
      this.router.navigate(['ropa']);
      // }
    });
  }
}
