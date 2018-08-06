import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionPlantaComponent } from './descripcion-planta.component';

describe('DescripcionPlantaComponent', () => {
  let component: DescripcionPlantaComponent;
  let fixture: ComponentFixture<DescripcionPlantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionPlantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
