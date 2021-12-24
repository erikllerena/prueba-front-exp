import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaRecetaComponent } from './busqueda-receta.component';

describe('BusquedaRecetaComponent', () => {
  let component: BusquedaRecetaComponent;
  let fixture: ComponentFixture<BusquedaRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaRecetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
