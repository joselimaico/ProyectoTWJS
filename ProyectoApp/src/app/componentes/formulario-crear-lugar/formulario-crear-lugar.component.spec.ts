import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearLugarComponent } from './formulario-crear-lugar.component';

describe('FormularioCrearLugarComponent', () => {
  let component: FormularioCrearLugarComponent;
  let fixture: ComponentFixture<FormularioCrearLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCrearLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCrearLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
