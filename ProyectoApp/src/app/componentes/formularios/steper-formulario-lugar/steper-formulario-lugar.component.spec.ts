import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteperFormularioLugarComponent } from './steper-formulario-lugar.component';

describe('SteperFormularioLugarComponent', () => {
  let component: SteperFormularioLugarComponent;
  let fixture: ComponentFixture<SteperFormularioLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteperFormularioLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteperFormularioLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
