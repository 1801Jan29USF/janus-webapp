import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient} from '@angular/common/http';

import { TrainingTypeService } from './training-type.service';

xdescribe('TrainingTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        TrainingTypeService,
        HttpClient
      ]
    });
  });

  it('should be created', inject([TrainingTypeService], (service: TrainingTypeService) => {
    expect(service).toBeTruthy();
  }));
});
