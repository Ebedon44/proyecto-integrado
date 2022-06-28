import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RopaService {

  constructor(private http: HttpClient) { }

  postRopa(ropa: any) {
    return this.http.post<any>("localhost:5000/ropa", ropa);
  }
  getRopa(){
    return this.http.get<any>('http://localhost:5000/ropa');
  }
  /*public getRopa() {
    const url = '/ropa';//'http://localhost:1000/api/ropa/all'; 
    return this.http.get(url);
  }*/

getAll():Observable<any>{
  return this.http.get<any>('/ropa');
}

}

