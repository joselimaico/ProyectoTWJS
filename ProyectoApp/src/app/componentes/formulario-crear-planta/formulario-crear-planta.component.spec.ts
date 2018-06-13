import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearPlantaComponent } from './formulario-crear-planta.component';

describe('FormularioCrearPlantaComponent', () => {
  let component: FormularioCrearPlantaComponent;
  let fixture: ComponentFixture<FormularioCrearPlantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCrearPlantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCrearPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
