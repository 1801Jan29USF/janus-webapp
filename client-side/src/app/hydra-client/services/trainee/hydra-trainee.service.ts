import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UrlService } from '../urls/url.service';
import { HydraTrainee } from '../../entities/HydraTrainee';

/**
 * This service is used for consuming Hydra API resources dealing with trainees.
 *
 * @export
 * @class HydraTraineeService
 */
@Injectable()
export class HydraTraineeService {

  constructor(private httpClient: HttpClient, private urlService: UrlService) { }

  /**
   * Requests all trainees with the input batch id and returns an observable.
   *
   * Possibly a legacy function so we did not consolidate this with fetchAllByBatch (Blake's class, 1801)
   *
   * @param batchId
   * @param status
   *
   * @returns {Observable<HydraTrainee[]>}
   */
  public findAllByBatchAndStatus(id: number, status: string): Observable<HydraTrainee[]> {
    const url = this.urlService.trainees.findAllByBatchAndStatus(id, status);
    return this.httpClient.get<HydraTrainee[]>(url);
  }

  /**
  * Saves the newly created trainee and returns the Observable.
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'PANEL')")
  *
  * @param trainee: HydraTrainee
  * @returns {Observable<HydraTrainee>}
  */
  public create(trainee: HydraTrainee): Observable<HydraTrainee> {
    const url = this.urlService.trainees.save();
    return this.httpClient.post<HydraTrainee>(url, trainee);
  }

  /**
   * Updates a trainee and returns the Observable.
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER','PANEL')")
   *
   * @param trainee: HydraTrainee
   * @returns {Observable<HydraTrainee>}
   */
  public update(trainee: HydraTrainee): Observable<HydraTrainee> {
    const url = this.urlService.trainees.update();
    return this.httpClient.put<HydraTrainee>(url, trainee);
  }

  /**
  * Deletes a trainee and returns the Observable.
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER','PANEL')")
  *
  * @param trainee: HydraTrainee
  * @returns {Observable<HydraTrainee>}
  */
  public delete(traineeId: number): Observable<HydraTrainee> {
    const url = this.urlService.trainees.delete(traineeId);
    return this.httpClient.delete<HydraTrainee>(url);
  }
}
