import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijosObjetoComponent } from './hijos-objeto.component';

describe('HijosObjetoComponent', () => {
  let component: HijosObjetoComponent;
  let fixture: ComponentFixture<HijosObjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijosObjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijosObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
