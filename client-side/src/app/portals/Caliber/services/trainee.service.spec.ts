import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { AlertsService } from './alerts.service';
import { TraineeService } from './trainee.service';

xdescribe('TraineeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        TraineeService,
        HttpClient,
        AlertsService
      ]
    });
  });

  it('should be created', inject([TraineeService], (service: TraineeService) => {
    expect(service).toBeTruthy();
  }));
});
