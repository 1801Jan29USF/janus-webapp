import { TestBed, inject } from '@angular/core/testing';
import { QCStatusService } from './qcstatus.service';
import { Dependencies } from '../caliber.test.module';


xdescribe('QCStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(Dependencies);
  });

  it('should be created', inject([QCStatusService], (service: QCStatusService) => {
    expect(service).toBeTruthy();
  }));
});
