import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaleeProductosComponent } from './detalee-productos.component';

describe('DetaleeProductosComponent', () => {
  let component: DetaleeProductosComponent;
  let fixture: ComponentFixture<DetaleeProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetaleeProductosComponent]
    });
    fixture = TestBed.createComponent(DetaleeProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
