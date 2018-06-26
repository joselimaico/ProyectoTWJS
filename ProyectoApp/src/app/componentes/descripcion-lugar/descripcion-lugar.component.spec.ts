import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionLugarComponent } from './descripcion-lugar.component';

describe('DescripcionLugarComponent', () => {
  let component: DescripcionLugarComponent;
  let fixture: ComponentFixture<DescripcionLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
