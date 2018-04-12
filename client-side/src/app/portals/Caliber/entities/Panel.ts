import { HydraTrainee } from '../../../hydra-client/entities/HydraTrainee';


// When making merges, please use the version presented by the Revaturions group.

export class Panel {
    panelId: number;
    trainee: HydraTrainee;
    panelist: any;
    interviewDate: any;
    duration: string;
    format: any;
    internet: string;
    panelRound: any;
    recordingConsent: any;
    recordingLink: string;
    status: any;
    associateIntro: string;
    projectOneDescription: string;
    projectTwoDescription: string;
    projectThreeDescription: string;
    communicationSkills: string;
    overall: string;
    feedback: Array<any>;
}
