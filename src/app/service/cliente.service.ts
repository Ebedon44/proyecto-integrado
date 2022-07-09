import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  getRopa(){
    return this.http.get<any>('http://18.215.239.125:3000/api/cliente')
  }
}
