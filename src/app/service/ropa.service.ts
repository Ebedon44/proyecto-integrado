import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  BehaviorSubject, Observable } from 'rxjs';
import {  catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RopaService {

  public search= new BehaviorSubject<string>("");

  constructor(private http: HttpClient) { }

  postRopa(ropa: any) {
    return this.http.post<any>('http://18.215.239.125:3000/api/ropa', ropa);
  }
  getRopa(){
    return this.http.get<any>('http://18.215.239.125:3000/api/ropa')
  }

  putRopa(id:number,ropa:any){
    return this.http.put<any>('http://18.215.239.125:3000/api/ropa/put/'+id, ropa);
  }

  deletRopa(id:number){
    return this.http.delete<any>('http://18.215.239.125:3000/api/ropa/delete/'+id)
  }


 



}



