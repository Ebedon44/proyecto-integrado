import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { loginI } from '../model/login.interface';
import { ResponseI } from '../model/response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public search = new BehaviorSubject<string>('');
  constructor(private http: HttpClient) {}

  /*postLogin(login: any) {
    return this.http.post<any>('http://localhost:3000/auth/login', login);
  }
  */
  loginByEmail(form: loginI): Observable<ResponseI> {
    return this.http.post<ResponseI>('http://localhost:3000/auth/login', form);
  }
}
