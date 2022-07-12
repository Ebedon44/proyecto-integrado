import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class signupService {
  public search = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  postSignup(signup: any) {
    return this.http.post<any>('http://localhost:3000/api/users', signup);
  }

  getSignup() {
    return this.http.get<any>('http://localhost:3000/api/users');
  }

  putSignup(id: number, signup: any) {
    return this.http.put<any>(
      'http://localhost:3000/api/users/put/' + id,
      signup
    );
  }

  deleteSignup(id: number) {
    return this.http.delete<any>('http://localhost:3000/api/users/delete/' + id);
  }
}
