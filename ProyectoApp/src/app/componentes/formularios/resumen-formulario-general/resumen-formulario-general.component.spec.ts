import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenFormularioGeneralComponent } from './resumen-formulario-general.component';

describe('ResumenFormularioGeneralComponent', () => {
  let component: ResumenFormularioGeneralComponent;
  let fixture: ComponentFixture<ResumenFormularioGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenFormularioGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenFormularioGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
