import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionHabitacionComponent } from './descripcion-habitacion.component';

describe('DescripcionHabitacionComponent', () => {
  let component: DescripcionHabitacionComponent;
  let fixture: ComponentFixture<DescripcionHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
