import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { signupI } from '../model/signup.interface';
import { ResponseI } from '../model/response.interface';

@Injectable({
  providedIn: 'root',
})
export class signupService {
  public search = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  postSignup(form: signupI): Observable<ResponseI> {
    return this.http.post<ResponseI>('http://localhost:3000/api/usuario', form);
  }

  getSignup() {
    return this.http.get<any>('http://localhost:3000/api/usuario');
  }

  putSignup(id: number, signup: any) {
    return this.http.put<any>(
      'http://localhost:3000/api/usuario/put/' + id,
      signup
    );
  }

  deleteSignup(id: number) {
    return this.http.delete<any>(
      'http://localhost:3000/api/usuario/delete/' + id
    );
  }
}
