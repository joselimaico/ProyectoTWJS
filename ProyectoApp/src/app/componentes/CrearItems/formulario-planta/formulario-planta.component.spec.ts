import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPlantaComponent } from './formulario-planta.component';

describe('FormularioPlantaComponent', () => {
  let component: FormularioPlantaComponent;
  let fixture: ComponentFixture<FormularioPlantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPlantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
