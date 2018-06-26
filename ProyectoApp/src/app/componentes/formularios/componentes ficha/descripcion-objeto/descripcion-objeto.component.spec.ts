import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionObjetoComponent } from './descripcion-objeto.component';

describe('DescripcionObjetoComponent', () => {
  let component: DescripcionObjetoComponent;
  let fixture: ComponentFixture<DescripcionObjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionObjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
