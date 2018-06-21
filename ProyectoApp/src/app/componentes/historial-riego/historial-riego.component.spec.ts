import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialRiegoComponent } from './historial-riego.component';

describe('HistorialRiegoComponent', () => {
  let component: HistorialRiegoComponent;
  let fixture: ComponentFixture<HistorialRiegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialRiegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialRiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
