import { TestBed, inject } from '@angular/core/testing';

import { RaspberryService } from './raspberry.service';

describe('RaspberryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaspberryService]
    });
  });

  it('should be created', inject([RaspberryService], (service: RaspberryService) => {
    expect(service).toBeTruthy();
  }));
});
