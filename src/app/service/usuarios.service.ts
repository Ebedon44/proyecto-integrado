import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpErrorResponse } from '@angular/common/http';
import {  BehaviorSubject, Observable } from 'rxjs';
import {  catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public search= new BehaviorSubject<string>("");

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get<any>('http://127.0.0.1:3000/api/usuarios')
  }

  putUsuarios(id:number,usuarios:any){
    return this.http.put<any>('http://127.0.0.1:3000/api/usuarios/put/'+id, usuarios);
  }

  deleteUsuarios(id:number){
    return this.http.delete<any>('hhttp://127.0.0.1:3000/api/usuarios/delete/'+id)
  }
}
