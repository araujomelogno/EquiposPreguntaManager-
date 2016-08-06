import {Component} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {ListClients} from './components/listClients';
import {CreateClient} from './components/createClient';
import {ClientActions} from './components/clientActions';
import {ProjectActions} from '../projects/components/projectActions';
import {SurveyActions} from '../projects/components/surveyActions';

@Component({
  selector: 'clients',
  pipes: [],
  providers: [],
  styles: [],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  {
    name: 'ListClients',
    component: ListClients,
    path: '/listClients',
    useAsDefault: true
  },
  {
    name: 'CreateClient',
    component: CreateClient,
    path: '/createClient',
    useAsDefault: false
  },
  {
    name: 'ClientActions',
    component: ClientActions,
    path: '/clientActions/:id/',
    useAsDefault: false
  },
  {
    name: 'ProjectActions',
    component: ProjectActions,
    path: '../projects/projectActions/:project/',
    useAsDefault: false
  },  
  {
    name: 'SurveyActions',
    component: SurveyActions,
    path: '../projects/surveyActions/:survey/',
    useAsDefault: false
  }
])
export class Clients {

  constructor() {
  }
}
