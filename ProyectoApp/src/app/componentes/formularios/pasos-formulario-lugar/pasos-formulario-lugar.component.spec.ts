import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasosFormularioLugarComponent } from './pasos-formulario-lugar.component';

describe('PasosFormularioLugarComponent', () => {
  let component: PasosFormularioLugarComponent;
  let fixture: ComponentFixture<PasosFormularioLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasosFormularioLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasosFormularioLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
