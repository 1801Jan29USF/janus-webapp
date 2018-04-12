import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HydraSkill } from '../../entities/HydraSkill';
import { UrlService } from '../urls/url.service';

/**
 * This service is used for consuming Hydra resources dealing with skills
 *
 * @export
 * @class HydraSkillService
 */
@Injectable()
export class HydraSkillService {

  constructor(private httpClient: HttpClient, private urlService: UrlService) { }

  /**
   * Retreives all skills
   *
   * @returns {Observable<HydraSkill[]>}
   */
  findAll(): Observable<HydraSkill[]> {
    const url = this.urlService.skills.findAll();
    return this.httpClient.get<HydraSkill[]>(url);
  }

  /**
   * Retreives all active skills
   *
   * @returns {Observable<HydraSkill[]>}
   */
  findAllActive(): Observable<HydraSkill[]> {
    const url = this.urlService.skills.findAllActive();
    return this.httpClient.get<HydraSkill[]>(url);
  }

  /**
   * Finds the skill for a given id
   *
   * @param {number} id
   * @returns {Observable<HydraSkill>}
   */
  findById(id: number): Observable<HydraSkill> {
    const url = this.urlService.skills.findById(id);
    return this.httpClient.get<HydraSkill>(url);
  }

  /**
  * Saves the newly created skill
  *
  * @param {HydraSkill} skill
  * @returns {Observable<HydraSkill>}
  */
  save(skill: HydraSkill): Observable<HydraSkill> {
    const url = this.urlService.skills.save();
    return this.httpClient.post<HydraSkill>(url, skill);
  }

  /**
  * Updates the newly created skill
  *
  * @param {HydraSkill} skill
  * @returns {Observable<HydraSkill>}
  */
  update(skill: HydraSkill): Observable<HydraSkill> {
    const url = this.urlService.skills.update();
    return this.httpClient.put<HydraSkill>(url, skill);
  }
}
