import { HydraBatch } from './HydraBatch';
import { HydraUser } from './HydraUser';


export class HydraTrainee {
    traineeId: number;
    resourceId: number;
    trainingStatus: string;
    batch: HydraBatch;
    phoneNumber: string;
    skypeId: string;
    profileUrl: string;
    recruiterName: string;
    college: string;
    degree: string;
    major: string;
    techScreenerName: string;
    projectCompletion: string;
    flagStatus: string;
    flagNotes: string;
    marketingStatus: string;
    client: string;
    endClient: string;
    traineeUserInfo: HydraUser;
}
