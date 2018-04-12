import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// services
import { AlertsService } from './alerts.service';
import { ApiService } from '../util/api.service';

// rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

// entities
import { Panel } from '../entities/Panel';
import { urls } from './urls';

// Interfaces
import { CRUD } from '../interfaces/api.interface';
import { HydraTrainee } from '../../../hydra-client/entities/HydraTrainee';

/**
* this service manages calls to the web services
* for Panel objects
*/
@Injectable()
export class PanelService implements CRUD<Panel> {

  listSubject: BehaviorSubject<Panel[]>;

  constructor(public http: HttpClient, public apiService: ApiService) {
    this.listSubject = new BehaviorSubject([]);
  }

  /*
   =====================
   BEGIN: API calls
   =====================
 */

 /**
  * retrievs all panels and pushed them on the listSubject
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'STAGING','PANEL')")
  */
  public fetchAll(): Observable<Panel[]> {
    this.http.get<any[]>(urls.panel.fetchAll()).subscribe((results) => this.listSubject.next(results));
    return this.listSubject.asObservable();
  }

  /**
   * retrieves all panels by trainee ID and pushes them on the
   * list subject
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'STAGING','PANEL')")
   *
   * @param trainee: Trainee
   */
  public fetchAllByTrainee(trainee: HydraTrainee): Observable<Panel[]> {
    this.http.get<any[]>(urls.panel.fetchAllByTrainee(trainee.traineeId)).subscribe((results) => this.listSubject.next(results));
    return this.listSubject.asObservable();
  }

  /**
  * creates a panel and pushes the created panel on the
  * savedSubject
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP' , 'PANEL')")
  *
  * @param panel: Panel
  */
  public create(panel: Panel): Observable<Panel> {
    console.log(panel);
    panel.status = 'Pass';
    return this.http.post<Panel>(urls.panel.save(), JSON.stringify(panel));
  }

  /**
  * updates a panel and pushes the updated panel on the
  * savedSubject
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'PANEL')")
  *
  * @param panel: Panel
  */
  public update(panel: Panel): Observable<Panel> {
    return this.http.put<any>(urls.panel.update(), JSON.stringify(this.prepareForApi(panel)));
  }

  /**
  * deletes a panel and pushes the deleted panel on the
  * deletedSubject
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'TRAINER', 'PANEL')")
  *
  * @param panel: Panel
  */
  public delete(panel: Panel): Observable<Panel> {
    return this.http.delete<any>(urls.batch.delete(panel.panelId));
  }

  /**
 * produces a clone of the Panel object that
 * has changes required for the API in order
 * to be processed
 *
 * @param batch: Batch
 *
 * @return any
 */
  protected prepareForApi(panel: Panel) {
    const output: any = {};

    Object.assign(output, panel);

    output.interviewDate = this.apiService.stringifyDate(panel.interviewDate);

    return output;
  }

}
