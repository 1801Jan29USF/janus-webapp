import { Category } from './Category';
import { HydraBatch } from '../../../hydra-client/entities/HydraBatch';

export class Assessment {
    assessmentId: number;
    title: string;
    batch: HydraBatch;
    rawScore: number;
    type: string;
    week: number;
    category: Category;
}
