import { Pipe, PipeTransform } from '@angular/core';
import { HydraTrainer } from '../../../hydra-client/entities/HydraTrainer';


@Pipe({
  name: 'trainerPipe'
})
export class TrainerPipePipe implements PipeTransform {
  /**
   * Logic to filter out Active/Inactive Trainers
   * @param {*} hydratrainers
   * @param {String} status
   * @returns {*}
   * @memberof TrainerPipePipe
   */
  transform(trainers: HydraTrainer[], status: String): HydraTrainer[] {
    if (status === 'ROLE_INACTIVE') {
      return trainers.filter(trainer => trainer.role === status);
    } else {
      return trainers.filter(trainer => trainer.role !== 'ROLE_INACTIVE');
    }
  }
}
