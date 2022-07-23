import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarVentaComponent } from './finalizar-venta.component';

describe('FinalizarVentaComponent', () => {
  let component: FinalizarVentaComponent;
  let fixture: ComponentFixture<FinalizarVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizarVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
