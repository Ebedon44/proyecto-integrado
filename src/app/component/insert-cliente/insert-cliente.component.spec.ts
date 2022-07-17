import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertClienteComponent } from './insert-cliente.component';

describe('InsertClienteComponent', () => {
  let component: InsertClienteComponent;
  let fixture: ComponentFixture<InsertClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
