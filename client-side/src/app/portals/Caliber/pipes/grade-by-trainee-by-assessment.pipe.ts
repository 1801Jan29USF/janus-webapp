import { Pipe, PipeTransform } from '@angular/core';

import { Grade } from '../entities/Grade';
import { Assessment } from '../entities/Assessment';
import { HydraTrainee } from '../../../hydra-client/entities/HydraTrainee';

@Pipe({
  name: 'gradeByTraineeByAssessment'
})

export class GradeByTraineeByAssessmentPipe implements PipeTransform {

  transform(value: Grade[], trainee: HydraTrainee, assessment: Assessment ): Grade[] {
    return value.filter( (grade) =>
      ( grade.assessment.assessmentId === assessment.assessmentId && grade.trainee.traineeId === trainee.traineeId ) );
  }

}
