import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InsertVentaComponent } from './insert-venta.component';

describe('InsertVentaComponent', () => {
  let component: InsertVentaComponent;
  let fixture: ComponentFixture<InsertVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule,
        ReactiveFormsModule,
        
      ]
      ,declarations: [ InsertVentaComponent]
    })
    .compileComponents();
  });


  /*beforeEach(() => {
    fixture = TestBed.createComponent(InsertVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  it('Debe retornar formulario invalido',() =>{
    const fixture = TestBed.createComponent(InsertVentaComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    const tipo = app.ventaForm.controls['tipo']
    
    expect(app.ventaForm.invalid).toBeTruthy();
  });
});
