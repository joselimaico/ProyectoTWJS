import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHabitacionComponent } from './formulario-habitacion.component';

describe('FormularioHabitacionComponent', () => {
  let component: FormularioHabitacionComponent;
  let fixture: ComponentFixture<FormularioHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
