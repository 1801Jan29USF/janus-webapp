import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClientMappedService } from './client-mapped-service';

xdescribe('ClientMappedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientMappedService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([ClientMappedService], (service: ClientMappedService) => {
    expect(service).toBeTruthy();
  }));
});
