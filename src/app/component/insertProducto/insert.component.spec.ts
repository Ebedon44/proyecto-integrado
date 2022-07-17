import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InsertComponent } from './insert.component';

describe('InsertComponent', () => {
  let component: InsertComponent;
  let fixture: ComponentFixture<InsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule,
        ReactiveFormsModule,
        
      ]
      ,declarations: [ InsertComponent ]
    })
    .compileComponents();
  });

  /*beforeEach(() => {
    fixture = TestBed.createComponent(InsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  it('Debe retornar formulario invalido',() =>{
    const fixture = TestBed.createComponent(InsertComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    const tipo = app.ropaForm.controls['tipo']
    
    expect(app.ropaForm.invalid).toBeTruthy();
  });

});
