import { TestBed, inject, async } from '@angular/core/testing';

import { HydraBatchService } from './hydra-batch.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { HydraBatch } from '../../entities/HydraBatch';
import { UrlService } from '../urls/url.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Batch } from '../../../portals/Caliber/entities/Batch';
import { environment } from '../../../../environments/environment';

fdescribe('HydraBatchService', () => {
  const batch = new HydraBatch();
  this.context = environment.hydraContext;
  batch.trainer = 100;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlService, HydraBatchService],
      imports: [HttpClientModule,
        HttpClientTestingModule]
    });
  });

  it('batch should be created', inject([HydraBatchService], (service: HydraBatchService) => {
    expect(service).toBeTruthy();
  }));

  it(`should fetchAll batches and verify the response`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.fetchAll().subscribe();

          backend.expectOne({
            url: `${this.context}batches`,
            method: 'GET'
          });
        })
    )
  );

  it(`should fetchAll batches and verify the observable`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.fetchAll().subscribe(next => {
            expect(next).toBeTruthy();
          });

          backend.expectOne(`${this.context}batches`).flush({});
        })
    )
  );

  it(`should NOT fail when sending an unmatched request to fetchAll`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.fetchAll().subscribe();

          backend.match(`${this.context}batches`);
        })
    )
  );

  it(`should fetchAllByTrainer and verify the response`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.fetchAllByTrainer().subscribe();

          backend.expectOne({
            url: `${this.context}batches/trainers`,
            method: 'GET'
          });
        })
    )
  );

  it(`should fetchAllByTrainer and verify the observable`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.fetchAllByTrainer().subscribe(next => {
            expect(next).toBeTruthy();
          });

          backend.expectOne(`${this.context}batches/trainers`).flush({});
        })
    )
  );

  it(`should NOT fail when sending an unmatched request to fetchAllByTrainer`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.fetchAllByTrainer().subscribe();

          backend.match(`${this.context}batches/trainers`);
        })
    )
  );

  it(`should fetchAllByTrainerId and verify the response`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.fetchAllByTrainerId(batch.trainer).subscribe();

          backend.expectOne({
            url: `${this.context}batches/trainers/${batch.trainer}`,
            method: 'GET'
          });
        })
    )
  );

  it(`should fetchAllByTrainerId and verify the observable`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.fetchAllByTrainerId(batch.trainer).subscribe(next => {
            expect(next).toBeTruthy();
          });

          backend.expectOne(`${this.context}batches/trainers/${batch.trainer}`).flush({});
        })
    )
  );

  it(`should NOT fail when sending an unmatched request to fetchAllByTrainerId`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.fetchAllByTrainerId(batch.trainer).subscribe();

          backend.match(`${this.context}batches/trainers/${batch.trainer}`);
        })
    )
  );

  it(`should create a batch and verify the response`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.create(batch).subscribe();

          backend.expectOne({
            url: `${this.context}batches`,
            method: 'POST'
          });
        })
    )
  );

  it(`should create a batch and verify the observable`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.create(batch).subscribe(next => {
            expect(next).toBeTruthy();
          });

          backend.expectOne(`${this.context}batches`).flush({});
        })
    )
  );

  it(`should NOT fail when sending an unmatched request to create a batch`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.create(batch).subscribe();

          backend.match(`${this.context}batches`);
        })
    )
  );

  it(`should update a batch and verify the response`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.update(batch).subscribe();

          backend.expectOne({
            url: `${this.context}batches`,
            method: 'PUT'
          });
        })
    )
  );

  it(`should update a batch and verify the observable`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.update(batch).subscribe(next => {
            expect(next).toBeTruthy();
          });

          backend.expectOne(`${this.context}batches`).flush({});
        })
    )
  );

  it(`should NOT fail when sending an unmatched request to update a batch`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.update(batch).subscribe();

          backend.match(`${this.context}batches`);
        })
    )
  );

  it(`should delete a batch and verify the response`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.delete(batch).subscribe();

          backend.expectOne({
            url: `${this.context}batches/${batch.batchId}`,
            method: 'DELETE'
          });
        })
    )
  );

  it(`should delete a batch and verify the observable`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.delete(batch).subscribe(next => {
            expect(next).toBeTruthy();
          });

          backend.expectOne(`${this.context}batches/${batch.batchId}`).flush({});
        })
    )
  );

  it(`should NOT fail when sending an unmatched request to delete a batch`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.delete(batch).subscribe();

          backend.match(`${this.context}batches/${batch.batchId}`);
        })
    )
  );
});
