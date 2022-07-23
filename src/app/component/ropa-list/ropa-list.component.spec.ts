import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaListComponent } from './ropa-list.component';

describe('RopaListComponent', () => {
  let component: RopaListComponent;
  let fixture: ComponentFixture<RopaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RopaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
