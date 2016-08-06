import {Component} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {ListProjects} from './components/listProjects';
import { CreateProject } from './components/createProject';
import { ProjectActions } from './components/projectActions';
import { SurveyActions } from './components/surveyActions';

@Component({
  selector: 'clients',
  pipes: [],
  providers: [],
  styles: [],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  {
    name: 'ListProjects',
    component: ListProjects,
    path: '/listProjects',
    useAsDefault: true
  },
  {
    name: 'CreateProject',
    component: CreateProject,
    path: '/createProject',
    useAsDefault: false
  },
  {
    name: 'ProjectActions',
    component: ProjectActions,
    path: '/projectActions/:project/',
    useAsDefault: false
  },
  {
    name: 'SurveyActions',
    component: SurveyActions,
    path: '/surveyActions/:survey/',
    useAsDefault: false
  }
])
export class Projects {

  constructor() {
  }
}
