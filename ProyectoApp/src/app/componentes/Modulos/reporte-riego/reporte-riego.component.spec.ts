import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteRiegoComponent } from './reporte-riego.component';

describe('ReporteRiegoComponent', () => {
  let component: ReporteRiegoComponent;
  let fixture: ComponentFixture<ReporteRiegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteRiegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteRiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
