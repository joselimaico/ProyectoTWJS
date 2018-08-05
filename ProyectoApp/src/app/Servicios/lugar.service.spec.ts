import { TestBed, inject } from '@angular/core/testing';

import { LugarService } from './lugar.service';

describe('PlaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LugarService]
    });
  });

  it('should be created', inject([LugarService], (service: LugarService) => {
    expect(service).toBeTruthy();
  }));
});
