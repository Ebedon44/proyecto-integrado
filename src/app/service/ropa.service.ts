import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpErrorResponse } from '@angular/common/http';
import {  BehaviorSubject, Observable } from 'rxjs';
import {  catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RopaService {

  public search= new BehaviorSubject<string>("");
  
  
  constructor(private http: HttpClient) { }

   /*httpOptions = {

    headers: new HttpHeaders({

        'Content-Type': 'application/json'

    })
  }*/

  postRopa(ropa: any) {
    return this.http.post<any>('http://localhost:3000/api/ropa', ropa);
  }
  getRopa(){
    return this.http.get<any>('http://localhost:3000/api/ropa')
  }

  putRopa(id:number,ropa:any){
    return this.http.put<any>('http://localhost:3000/api/ropa/put/'+id, ropa);
  }

  deletRopa(id:number){
    return this.http.delete<any>('http://localhost:3000/api/ropa/delete/'+id)
  }

  insertImagen(file:File){
    return this.http.post<any>('http://localhost:3000/images/upload',file);
  }


 
  postImagen(photo:File){
    const fd = new FormData();
    fd.append('image',photo)
    return this.http.post('http://localhost:3001/api/photos',fd)
  }
  /*getImagen(id:string){
    return this.http.get<any>('http://localhost:4000/api/photos/'+id);
  }*/





}



