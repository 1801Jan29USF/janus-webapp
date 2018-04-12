import { TestBed, inject } from '@angular/core/testing';

import { AlertsService } from './alerts.service';

xdescribe('AlertsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertsService]
    });
  });

  it('should be created', inject([AlertsService], (service: AlertsService) => {
    expect(service).toBeTruthy();
  }));

  it('has working getMessage', inject([AlertsService], (service: AlertsService) => {
    expect(service.getMessage()).toBeTruthy();
  }));
});
