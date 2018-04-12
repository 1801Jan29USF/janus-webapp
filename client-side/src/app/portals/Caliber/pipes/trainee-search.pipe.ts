import { Pipe, PipeTransform } from '@angular/core';
import { HydraTrainee } from '../../../hydra-client/entities/HydraTrainee';


@Pipe({
  name: 'traineeSearchPipe'
})
export class TraineeSearch implements PipeTransform {

  transform(trainees: any, searchText: String): HydraTrainee[] {
    if (!trainees) {
      return [];
    } else {
      searchText = searchText.toLowerCase();

      return trainees.filter(results => {
        return results.toLowerCase().includes(searchText);
      });
    }
  }
}

