import { TestBed, inject } from '@angular/core/testing';

import { HydraBatchUtilService } from './hydra-batch-util.service';

describe('HydraBatchUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HydraBatchUtilService]
    });
  });

  it('should be created', inject([HydraBatchUtilService], (service: HydraBatchUtilService) => {
    expect(service).toBeTruthy();
  }));
});
