import { Injectable, Inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
/**
 * This Class servers the purpose of providing the other services with the appropriate urls for consuming hydra.
 *
 * @export
 * @class UrlService
 */
@Injectable()
export class UrlService {
  private context: string;

  /**
   * All urls associated with skills will come from this object
   */
  skills = {
    findAll: () => `${this.context}skills`,
    findAllActive: () => `${this.context}skills/active`,
    findById: (id: number) => `${this.context}skills/${id}`,
    save: () => `${this.context}skills`,
    update: () => `${this.context}skills`,
  };

 /**
   * Endpoints for batches
   */

 batches = {
    fetchAllByTrainer: () => `${this.context}batches/trainers`,
    fetchAllByTrainerId: (id: number) => `${this.context}batches/trainers/${id}`,
    fetchAll: () => `${this.context}batches`,
    save: () => `${this.context}batches`,
    update: () => `${this.context}batches`,
    delete: (batchId) => `${this.context}batches/${batchId}`
};

  /**
   * Endpoints for trainees
   */
  trainees = {
    findAllByBatchAndStatus: (id: number, status: string) => `${this.context}trainees/batch/${id}/status/${status}`,
    save: () => `${this.context}trainees`,
    update: () => `${this.context}trainees`,
    delete: (traineeId: number) => `${this.context}trainees/${traineeId}`,
  };

  /**
   * Endpoints for trainers
   */
  trainers = {
    fetchByEmail: (email: string) => `${this.context}trainers/email/${email}/`,
    fetchAll: () => `${this.context}trainers`,
    save: () => `${this.context}trainers`,
    update: () => `${this.context}trainers`,
    getTitles: () => `${this.context}trainers/titles`,
    getRoles: () => `${this.context}trainers/roles`,

  };
  constructor() {
    this.context = environment.hydraContext;
  }
}
