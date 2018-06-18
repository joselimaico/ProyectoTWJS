import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLugarComponent } from './formulario-lugar.component';

describe('FormularioLugarComponent', () => {
  let component: FormularioLugarComponent;
  let fixture: ComponentFixture<FormularioLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
