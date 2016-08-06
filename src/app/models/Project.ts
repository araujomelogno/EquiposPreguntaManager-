import {Survey} from './Survey';

export class Project {
    name: String = '';
    created: Date;
    init: Date;
    end: Date;
    activeSurvey: Survey;
    surveys: Survey[] = [];
    completedQuantity: number = 0;
    goalQuantity: number = 0;
    
}