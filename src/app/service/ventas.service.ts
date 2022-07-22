import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpErrorResponse } from '@angular/common/http';
import {  BehaviorSubject, Observable } from 'rxjs';
import {  catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  public search= new BehaviorSubject<string>("");

  constructor(private http: HttpClient) { }

  postVenta(venta: any) {
    return this.http.post<any>('http://localhost:3000/api/venta', venta);
  }
  getVenta(){
    return this.http.get<any>('http://localhost:3000/api/venta')
  }

  putVenta(id:number,venta:any){
    return this.http.put<any>('http://localhost:3000/api/venta/put/'+id, venta);
  }

  deleteVenta(id:number){
    return this.http.delete<any>('http://localhost:3000/api/venta/delete/'+id)
  }

}
