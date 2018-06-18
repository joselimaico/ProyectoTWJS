import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGeneralLugarComponent } from './formulario-general-lugar.component';

describe('FormularioGeneralLugarComponent', () => {
  let component: FormularioGeneralLugarComponent;
  let fixture: ComponentFixture<FormularioGeneralLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioGeneralLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGeneralLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
