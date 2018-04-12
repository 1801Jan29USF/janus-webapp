import { Injectable } from '@angular/core';

// entities




// rxjs
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HydraTrainer } from '../../entities/HydraTrainer';
import { UrlService } from '../urls/url.service';


@Injectable()
export class TrainerService {

  public currentTrainer = new HydraTrainer;

  constructor(private httpClient: HttpClient, private urls: UrlService) { }


  /*
    =================================
    GET API CALLS
    =================================
  */

  /**
  * sets current trainer stored on this service
  *
  * @param trainer: HydraTrainer
  */

  public changeCurrentTrainer(trainer: HydraTrainer) {
    this.currentTrainer = trainer;
    return this.httpClient.get<HydraTrainer>(this.urls.trainers.fetchByEmail(trainer.email));
  }

  /**
     * retrieves all trainers and pushes them on the
     * returns HydraTrainer[] Observable
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP', 'TRAINER', 'STAGING', 'QC', 'PANEL')")
     */

  public fetchAll(): Observable<HydraTrainer[]> {
    const url = this.urls.trainers.fetchAll();
    return this.httpClient.get<HydraTrainer[]>(url);

  }
  /**
      * retrieves trainer with given email address
      * returns HydraTrainer Observable
      *
      * spring-security: @PreAuthorize("hasAnyRole('VP', 'TRAINER', 'STAGING', 'QC', 'PANEL')")
      *
      * @param email: String
      */

  public fetchByEmail(email: string) {
    const url = this.urls.trainers.fetchByEmail(email);
    return this.httpClient.get<HydraTrainer>(url);
  }

  /**
     * Retrieves all titles for trainers
     * returns String[] Observable
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP')")
     *
     */

  public fetchTitles(): Observable<String[]> {
    const url = this.urls.trainers.getTitles();
    return this.httpClient.get<String[]>(url);

  }
  /**
     * Retrieves all roles for trainers
     * returns String[] Observable
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP')")
     *
     */

  public fetchRoles(): Observable<String[]> {
    const url = this.urls.trainers.getRoles();
    return this.httpClient.get<String[]>(url);
  }

  /*
    =================================
    POST API CALLS
    =================================
  */
  /**
     * creates a trainer and pushes the created trainer on the
     * returns saved HydraTrainer observable
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP')")
     *
     * @param trainer: HydraTrainer
     */

  public create(trainer: HydraTrainer): Observable<HydraTrainer> {
    return this.httpClient.post<HydraTrainer>(this.urls.trainers.save(), trainer);
  }

  /*
  =================================
  PUT API CALLS
  =================================
*/

  /**
     * updates a trainer and pushes the updated trainer on the
     * returnupdated HydraTrainer observable
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP')")
     *
     * @param trainer: HydraTrainer
     */

  public update(trainer: HydraTrainer): Observable<HydraTrainer> {
    return this.httpClient.put<HydraTrainer>(this.urls.trainers.update(), trainer);
  }

}
