import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { ProductosComponent } from './productos.component';

describe('ProductosComponent', () => {
  let component: ProductosComponent;
  let fixture: ComponentFixture<ProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatDialog],declarations: [ ProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /* it('should create', () => {
    expect(component).toBeTruthy();
  })*/

  //Esta Prueba sirve para saber si nuestro componenete de productos se crea y se instancia 
  it('Debe exisitir el componenete de productos para inicializar',()=>{
    fixture = TestBed.createComponent(ProductosComponent);
    const app = fixture.componentInstance
    expect(app).toBeTruthy();  //espero que el componente exista 
  }) ;

  
});
