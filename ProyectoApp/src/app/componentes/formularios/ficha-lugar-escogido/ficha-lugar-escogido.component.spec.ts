import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaLugarEscogidoComponent } from './ficha-lugar-escogido.component';

describe('FichaLugarEscogidoComponent', () => {
  let component: FichaLugarEscogidoComponent;
  let fixture: ComponentFixture<FichaLugarEscogidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaLugarEscogidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaLugarEscogidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
