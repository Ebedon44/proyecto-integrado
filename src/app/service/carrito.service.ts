import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ropa, Venta } from '../model/model.ropa';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private _ropas : Venta[] = [];
  private _ropasSubject : BehaviorSubject<Venta[]> = new BehaviorSubject(this._ropas);
  public ropas : Observable<Venta[]> = this._ropasSubject.asObservable();


  constructor() { }

  
  addCarrito(ropa:Venta){
    this._ropas.push(ropa);
  
  }


  getRopasCarrito(){
    console.log("Ropas ingresadas en el carrito")
    console.log(this._ropas)
    return this._ropas
  }


}
